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
var SceneManger = (function (_super) {
    __extends(SceneManger, _super);
    function SceneManger() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    SceneManger.prototype.init = function () {
        // 实例化两个场景
        this.menuScene = new MenuScene();
        this.gameScene = new GameScene();
        // 默认添加开始场景
        this.addChild(this.menuScene);
    };
    // 实例化单例获取方法
    SceneManger.getInstance = function () {
        if (!SceneManger.instance) {
            SceneManger.instance = new SceneManger();
        }
        return SceneManger.instance;
    };
    // 切换场景
    SceneManger.prototype.changeScene = function (type) {
        this.removeChildren();
        this.addChild(this[type]);
    };
    return SceneManger;
}(egret.Sprite));
__reflect(SceneManger.prototype, "SceneManger");
