

function Loader(ctx) {

    var items = [];
    var started = false;
    var finishedCallback = null;
    var timer = 0;
    var percentage = 0;
    var dots = "";

    function runLoop() {
        timer = timer > 4 ? 0 : timer + 1;
        console.log(timer);
        dots = ("" + timer > 1 ? "." : "") + (timer > 2 ? "." : "") + (timer > 3 ? "." : "");
        percentage = items.filter(e => e.loaded) / items.length;
        if (!percentage) {
            percentage = 0;
        }
        if (started) {
            let completeItems = items.filter(e => !e.loaded);
            if (completeItems.length = items.length) {
                finishedCallback();
             //   return;
            }
        }
        load.draw(ctx);
        requestAnimationFrame(runLoop);
    }

    var load = {
        finished: false,
        draw: function loaderDraw(ctx) {

            ctx.font = "bold 24px Courier-new monospace";
            var offset = ctx.measureText(`${percentage}`).width / 2;
            ctx.fillText(`Loading${dots}`, 470, 250);
            ctx.fillText(`${percentage}`, 500 - offset, 300);
            ctx.fillText(`%`, 505, 300);
        },
        loadImage: function loaderLoadImage(src) {
            var img = new Image();
            img.addEventListener('load', function () {
                console.log("loaded: " + src);
                items.find(e => e.name == src).loaded = true;
            }, false);
            img.src = src;
            items.push({
                itemType: "Image",
                name: src,
                item: img,
                loaded: false
            });
            return img;
        },
        loadSound: function loaderLoadSound(src) {
            let sfx = new Audio(src);
            sfx.addEventListener('loadeddata', () => {
                console.log("loaded: " + src);
                items.find(e => e.name == src).loaded = true;
            });
            return sfx;
        },
        begin: function loaderBegin(callback) {
            started = true;
            finishedCallback = callback;
            runLoop();
        }
    };
    return load;
}
