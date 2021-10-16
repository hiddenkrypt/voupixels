
window.onload = function Engine() {
    var canvas = document.getElementById("c");
    canvas.width = 1000;
    canvas.height = 600;
    var ctx = canvas.getContext("2d");
	
	ctx.clearRect(0,0,1000,600);
	ctx.font = "bold 24px Courier-new monospace";
	var offset = ctx.measureText("Click To Start").width / 2;
    ctx.fillStyle = "#d0c0b0";
	ctx.fillText("Click To Start", canvas.width/2 - offset, canvas.height/2);
	
    var loader = Loader(ctx);
    var spritesheet = loader.loadImage("spritesheet.png");
	loader.onComplete = function loadingComplete() {
		requestAnimationFrame( renderLoop );
        ctx.fillStyle = "#d0c0b0";
        ctx.fillRect(10, 10, 10, 10);
        ctx.drawImage(spritesheet, 0, 0, 700, 700);
        ctx.fillRect(100, 100, 100, 100);
        console.log(spritesheet);
    };
	canvas.addEventListener("click", function(){		
		loader.begin();
	});
	var entities = [ ball( canvas ) ];
	function renderLoop(){
		ctx.clearRect(0,0,1000,600);
				
		entities.forEach(e=>{
			e.update();
			e.draw( ctx );
		});
		requestAnimationFrame( renderLoop );
	}
};




function ball( canvas ){
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
	
	return {update:update, draw:draw};
}