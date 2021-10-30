
/*
bg elements are height adjusted so display at the same y
bg elements are all 928 x 793
for "seamless" bg, maybe overlap tiles by half pixel?

*/
function Background( sprites, camera ) {

	function render( ctx ){
		var left = camera.x - (camera.x % 928) + 928*(Math.floor(camera.x/928));
		var right = left + 927.5;
		sprites.forEach(e=>{
			ctx.drawImage( e, left, 0 );
			ctx.drawImage( e, right, 0 );
		});
	}
	function update(  ){
	}
	return {
		render: render,
		update: update
	};
}
