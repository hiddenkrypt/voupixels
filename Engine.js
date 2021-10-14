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
        ctx.fillStyle = "#d0c0b0";
        ctx.fillRect(10, 10, 10, 10);
        ctx.drawImage(spritesheet, 0, 0, 700, 700);
        ctx.fillRect(100, 100, 100, 100);
        console.log(spritesheet);
    };
	loader.begin();
};