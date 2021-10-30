

var Camera = function Camera(){
	let position = { x:0, y:0 };
	var dy = .3;
	function update(){
		position.x += .4;
		position.y += dy;
		if(position.y >= 793-600){
			dy = 0;
		}
	}
	function render( ctx ){
		ctx.resetTransform();
		ctx.translate(-position.x, -position.y);
	}
	return {
		x: position.x,
		y: position.y,
		update:update,
		render:render
	}
};

/*
Need a formula that causes the camera to move a LOT when there's big distance, but not *all* of it. And moves most of itwhen there's a small distance? Step funct probably...

For now, snap to keep character on edge of screen, don't move if character is away from edge. 


*/