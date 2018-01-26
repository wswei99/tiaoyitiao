class MenuScene extends eui.Component implements  eui.UIComponent {
	// 开始按钮
	public startBtn:eui.Button;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	private init(){
		this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapHandler,this);
	}
	private tapHandler(){
		// 切换场景
		SceneManger.getInstance().changeScene('gameScene');
	}
}