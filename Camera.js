

var Camera = function Camera(){
	let position = { x:0, y:0 };

};

/*
Need a formula that causes the camera to move a LOT when there's big distance, but not *all* of it. And moves most of itwhen there's a small distance? Step funct probably...

For now, snap to keep character on edge of screen, don't move if character is away from edge. 


*/