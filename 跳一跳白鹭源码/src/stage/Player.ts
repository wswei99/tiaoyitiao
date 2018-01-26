class Player {
	//
	public jumpDistance: number = 0;
	public power: number = 0;
	public initSpeed: number = 0;
	public speed: number = 0;
	public isReadyJump: boolean = false;
	public direction: number = 1;

	// 准备跳远的音频
	private readyJumpAudio = null;
	private readyJumpAudioId = -1;
	// 跳远中的音频
	private jumpAudio = null;
	private jumpAudioId = -1;

	public constructor() {
	}

	/**
	 * 准备跳跃
	 */
	public readyJump() {
		// 播放准备跳跃音频;
		// this.readyJumpAudioId = 
		// 小人开始形变

		//
		this.speed  = this.initSpeed;
		this.isReadyJump = true;
	}
	// 跳跃到
	public jumpTo(worldPos,cb:Function,cbTarget?:any){
		// 停止准备音频
		
		// 开始播放跳跃音频
		
		// 让整个视图停止可触摸防止连续点击,多次空中跳跃

		// 找到目标位置
		// let targetPos = 
		// 绘制甩尾光效
		
		this.isReadyJump = false;
		// 恢复小人的原始比例大小

		// 按贝赛尔曲线轨迹移动指定的距离
	}
}