class SceneManger extends egret.Sprite {
	// 场景控制器的单例
	private static instance: SceneManger;
	// 开始场景
	private menuScene: MenuScene;
	// 游戏场景
	private gameScene: GameScene;

	public constructor() {
		super();
		this.init();
	}
	private init(){
		// 实例化两个场景
		this.menuScene = new MenuScene();
		this.gameScene = new GameScene();
		// 默认添加开始场景
		this.addChild(this.menuScene);
	}
	// 实例化单例获取方法
	public static getInstance(): SceneManger{
		if(!SceneManger.instance){
			SceneManger.instance = new SceneManger();
		}
		return SceneManger.instance;
	}
	// 切换场景
	public changeScene(type){
		this.removeChildren();
		this.addChild(this[type]);
	}
}