const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Bullet,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.TiledBg.Cnds.CompareX,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.TiledBg.Acts.SetX,
		C3.Plugins.TiledBg.Exps.X,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Keyboard.Cnds.OnAnyKey,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.Bullet.Exps.Speed,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.TiledBg.Acts.SetSize,
		C3.Plugins.System.Exps.random,
		C3.Plugins.TiledBg.Acts.SetPos,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.TiledBg.Exps.Height,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.TiledBg.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Behaviors.Platform.Cnds.OnLand
	];
};
self.C3_JsPropNameTable = [
	{Bullet: 0},
	{TiledBackground: 0},
	{Solid: 0},
	{Block: 0},
	{Platform: 0},
	{Player: 0},
	{Touch: 0},
	{Keyboard: 0},
	{DistanceDisplay: 0},
	{TotalDistance: 0},
	{CurrentDistance: 0},
	{NextBlock: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Block: class extends self.ITiledBackgroundInstance {},
	Player: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	DistanceDisplay: class extends self.ITextInstance {}
}