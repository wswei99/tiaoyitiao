var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        // 基础数据
        _this.maxScale = 1;
        _this.minScale = 1;
        _this.minDistance = 200;
        _this.maxDistance = 400;
        _this.anchorOffset = 100;
        // 斜率
        _this.arrayRatio = 0.556047197640118;
        // 初始速度
        _this.initSpeed = 150;
        // 
        _this.speed = 0;
        // 
        _this.power = 0;
        // 跳的距离
        _this.jumpDistance = 0;
        // 下一个盒子方向(1/-1)
        _this.direction = 1;
        // 判断是否是按下状态
        _this.isReadyJump = false;
        _this.timeOnEnterFrame = 0;
        return _this;
    }
    GameScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.reset();
    };
    GameScene.prototype.init = function () {
        this.blockList = ["block1_png", "block2_png", "block3_png"];
        // 添加触摸事件
        this.bg.touchEnabled = true;
        this.blockPanel.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDown, this);
        this.bg.addEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUp, this);
        // 设置玩家的锚点
        // 设置锚点
        this.player.anchorOffsetX = this.player.width / 2;
        this.player.anchorOffsetY = this.player.height;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    // 重置游戏
    GameScene.prototype.reset = function () {
        // this.removeChildren();
        // 添加一个方块
        var blockNode = new eui.Image();
        blockNode.touchEnabled = false;
        blockNode.source = this.blockList[0];
        this.blockPanel.addChild(blockNode);
        blockNode.x = -20;
        blockNode.y = this.height / 2 + blockNode.height;
        this.currentBlock = blockNode;
        // 摆正小人的位置
        this.player.y = this.currentBlock.y + this.currentBlock.height / 2 - 25;
        // this.blockPanel.setChildIndex(this.player, 0);
        this.player.x = this.currentBlock.x + 220;
        this.blockPanel.addChild(this.player);
        // 添加下一个方块
        this.addBlock();
    };
    // 添加一个方块
    GameScene.prototype.addBlock = function () {
        // 随机一个方块
        var n = Math.floor(Math.random() * this.blockList.length);
        var blockNode = new eui.Image();
        blockNode.source = this.blockList[n];
        this.blockPanel.addChild(blockNode);
        // 设置缩放
        var scale = this.minScale;
        blockNode.scaleX = blockNode.scaleY = scale;
        // 设置位置
        var distance = this.minDistance + Math.random() * (this.maxDistance - this.minDistance);
        if (this.direction > 0) {
            blockNode.x = this.currentBlock.x + distance;
            blockNode.y = this.currentBlock.y - distance * this.arrayRatio;
        }
        else {
            blockNode.x = this.currentBlock.x - distance;
            blockNode.y = this.currentBlock.y - distance * this.arrayRatio;
        }
        this.currentBlock = blockNode;
    };
    // 按下
    GameScene.prototype.onKeyDown = function () {
        // 播放按下的音频
        console.log(11111);
        // 变形
        egret.Tween.get(this.player).to({
            scaleY: .5
        }, 3000);
        this.isReadyJump = true;
    };
    // 放开
    GameScene.prototype.onKeyUp = function () {
        // 落点坐标
        var targetPosX = this.player.x + this.jumpDistance * this.direction * this.arrayRatio;
        var targetPosY = this.player.y + this.jumpDistance * this.direction * this.arrayRatio;
    };
    // 帧事件
    GameScene.prototype.onEnterFrame = function (e) {
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = (now - time) / 1000;
        console.log("onEnterFrame: ", pass);
        this.timeOnEnterFrame = egret.getTimer();
        if (this.isReadyJump) {
            this.speed += pass * this.power;
            this.jumpDistance += this.speed * pass;
        }
    };
    return GameScene;
}(eui.Component));
__reflect(GameScene.prototype, "GameScene", ["eui.UIComponent", "egret.DisplayObject"]);
