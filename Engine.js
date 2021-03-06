
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
	var bgsprites = [];
   var spritesheet = loader.loadImage( "spritesheet.png" );
    bgsprites.push( loader.loadImage( "bg/bg2-parallax1.png" ) );
    bgsprites.push( loader.loadImage( "bg/bg3-parallax2.png" ) );
    bgsprites.push( loader.loadImage( "bg/lights-1.png" ) );
    bgsprites.push( loader.loadImage( "bg/bg4-parallax.png" ) );
    bgsprites.push( loader.loadImage( "bg/bg5-parallax.png" ) );
    bgsprites.push( loader.loadImage( "bg/lights-2.png" ) );
    bgsprites.push( loader.loadImage( "bg/bg6-parallax.png" ) );
    bgsprites.push( loader.loadImage( "bg/fg1-treetops.png" ) );
    bgsprites.push( loader.loadImage( "bg/fg2-ground.png" ) );
    bgsprites.push( loader.loadImage( "bg/fg3-debris.png" ) );
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
	var camera = Camera();
	var entities = [ camera, Background( bgsprites, camera ), Ball( canvas ), Character( spritesheet )  ];
	function renderLoop(){
		ctx.clearRect(0,0,10000,6000);
				
		entities.forEach(e=>{
			e.update();
			e.render( ctx );
		});
		requestAnimationFrame( renderLoop );
	}
};



