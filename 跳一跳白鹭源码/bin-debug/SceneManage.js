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
var SceneMange = (function (_super) {
    __extends(SceneMange, _super);
    function SceneMange() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    SceneMange.prototype.init = function () {
        // 实例化两个场景
        this.beginScene = new BeginScene();
        this.gameScene = new GameScene();
        // 默认添加开始场景
        this.addChild(this.beginScene);
    };
    // 实例化单例获取方法
    SceneMange.getInstance = function () {
        if (!SceneMange.instance) {
            SceneMange.instance = new SceneMange();
        }
        return SceneMange.instance;
    };
    // 切换场景
    SceneMange.prototype.changeScene = function (type) {
        // 释放资源
        if (type == 'gameScene') {
            this.beginScene.release();
        }
        // 移除所有显示列表中的对象
        this.removeChildren();
        // 添加下一个场景
        this.addChild(this[type]);
    };
    return SceneMange;
}(egret.Sprite));
__reflect(SceneMange.prototype, "SceneMange");
