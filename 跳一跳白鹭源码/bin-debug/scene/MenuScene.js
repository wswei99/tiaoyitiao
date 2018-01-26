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
var MenuScene = (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene() {
        return _super.call(this) || this;
    }
    MenuScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MenuScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    MenuScene.prototype.init = function () {
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapHandler, this);
    };
    MenuScene.prototype.tapHandler = function () {
        // 切换场景
        SceneManger.getInstance().changeScene('gameScene');
    };
    return MenuScene;
}(eui.Component));
__reflect(MenuScene.prototype, "MenuScene", ["eui.UIComponent", "egret.DisplayObject"]);
