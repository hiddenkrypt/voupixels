/*
sprites are 120x120, and the c4haracter is centered about 100 tall, feet at 120, and about 30 wide. 
*/

/*
Sprite guide:
32: standing Static
33-36: ducking
40-43: jump
20-30: walk
00-16: magic idle anim


Statemachine:
*/
function Character( sprites ){
	let position = { x: 0, y: 0 };
	let direction = { dy: 0, dy: 0 };
	let standing = {
		x: 3,
		y: 2
	}
	let state = standing;
	
	function render( ctx ){
		ctx.drawImage( sprites, 
			120*state.x,
			120*state.y,
			120, 120,
			position.x,
			position.y,
			120, 120);
		if( DEBUG.HITBOXES ){
			ctx.strokeStyle = "#ffff00";
			ctx.strokeRect( position.x+(120-30)/2,
				position.y+20,
				30, 100);
		}
	}
	function update(){
		
	};
	return {
		render: render,
		update: update
	};


}