//engine.js

window.onload = function engine() {

    var canvas = document.getElementById("c");
    canvas.width = 1000;
    canvas.height = 600;
    var ctx = canvas.getContext("2d");

    var loader = Loader(ctx);
    var spritesheet = loader.loadImage("spritesheet.png");
	loader.onComplete = function loadingComplete() {
        console.log("loader finished");
		requestAnimationFrame( renderLoop );
        ctx.fillStyle = "#d0c0b0";
        ctx.fillRect(10, 10, 10, 10);
        ctx.drawImage(spritesheet, 0, 0, 700, 700);
        ctx.fillRect(100, 100, 100, 100);
        console.log(spritesheet);
    };
	loader.begin();
	var ball = {x:0, y:0, dx:1, dy:1}
	function renderLoop(){
		updateEntities();
		ctx.clearRect(0,0,1000,600);
		
		
        ctx.fillStyle = "#00cc00";
        ctx.fillRect(ball.x+5, 0, 1, canvas.height);
        ctx.fillRect(0, ball.y+5, canvas.width, 1);
		
        ctx.fillStyle = "#d0c0b0";
        ctx.fillRect(ball.x, ball.y, 10, 10);
		
		requestAnimationFrame( renderLoop );
	}
	
	function updateEntities(){
		ball.x += ball.dx;
		ball.y += ball.dy;
		if(ball.x > canvas.width){ ball.dx = -1; }
		if(ball.x < 0){ ball.dx = 1; }
		if(ball.y > canvas.height){ ball.dy = -1; }
		if(ball.y < 0){ ball.dy = 1; }
	}


};

