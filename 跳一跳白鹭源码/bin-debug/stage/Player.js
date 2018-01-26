var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Player = (function () {
    function Player() {
        //
        this.jumpDistance = 0;
        this.power = 0;
        this.initSpeed = 0;
        this.speed = 0;
        this.isReadyJump = false;
        this.direction = 1;
        // 准备跳远的音频
        this.readyJumpAudio = null;
        this.readyJumpAudioId = -1;
        // 跳远中的音频
        this.jumpAudio = null;
        this.jumpAudioId = -1;
    }
    /**
     * 准备跳跃
     */
    Player.prototype.readyJump = function () {
        // 播放准备跳跃音频;
        // this.readyJumpAudioId = 
        // 小人开始形变
        //
        this.speed = this.initSpeed;
        this.isReadyJump = true;
    };
    // 跳跃到
    Player.prototype.jumpTo = function (worldPos, cb, cbTarget) {
        // 停止准备音频
        // 开始播放跳跃音频
        // 让整个视图停止可触摸防止连续点击,多次空中跳跃
        // 找到目标位置
        // let targetPos = 
        // 绘制甩尾光效
        this.isReadyJump = false;
        // 恢复小人的原始比例大小
        // 按贝赛尔曲线轨迹移动指定的距离
    };
    return Player;
}());
__reflect(Player.prototype, "Player");
