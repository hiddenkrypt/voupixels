
function Ball( canvas ){
	var x = 0;
	var y = 0;
	var dx = 1;
	var dy = 1;
	function update(){
		x += dx;
		y += dy;
		if(x > canvas.width){ dx = -1; }
		if(x < 0){ dx = 1; }
		if(y > canvas.height){ dy = -1; }
		if(y < 0){ dy = 1; }
	}
	function draw( ctx ){
		ctx.fillStyle = "#00cc00";
		ctx.fillRect(x+5, 0, 1, 600);
		ctx.fillRect(0, y+5, 1000, 1);
		ctx.fillStyle = "#d0c0b0";
		ctx.fillRect(x, y, 10, 10);
	}
	
	return {update:update, render:draw};
}