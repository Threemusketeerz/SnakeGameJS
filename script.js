var posx, posy, fruitx, fruity;
//tail, tailx, taily;
var w = 800;
var h = 600;
var fruit;
fH = 70;
fW = 70;
posx = w/2;
posy = h/2;
var gameOver = false;
var keyCount = 0;

function preload() {
    fruit = loadImage("images/fruit.png");
    bitFont = loadFont("font/PressStart2P.ttf");
}

function setup() {
    // frameRate(10);
    // pixelDensity(5.0);
    createCanvas(w, h);
    fruitx = floor(random(0, w - 50));
    fruity = floor(random(0, h - 50));

    noLoop();
    // console.log("fruit: " + fruitx +" "+ fruity);
}

function draw() {

    background(0);

    if (keyCount === 0) {
        fill(255,0,0);
        textSize(30);
        text("START GAME", w/2 - 130, h/2);
        textSize(12);
        text("Press C to start",w/2 - 100, h/2+ 30);
    }

    image(fruit, fruitx, fruity, fW, fH);
    imageMode(CENTER);

    fill(255);
    ellipse(posx, posy, 20);
    ellipseMode(CENTER);

    snake();
    score();
    // strokeWeight(5);
    
    // controls();
}
function score() {
    textFont(bitFont);
    stroke(255);
    fill(255);
    textSize(15);
    text("Score " + tScore, 10, 20);
}


function keyPressed() {
    //Press X to stop draw() loop
    if (keyCode === 88) {
        noLoop();
    }

    //press C to init draw() loop
    if (keyCode === 67) {
        keyCount++;
        loop();
    }
    return false;
}

function reset() {
    tailArr = [];
    tLength = 0;
    posx = w/2;
    posy = h/2;
    // textFont(bitFont);
    fill(255,0,0);
    textSize(30);
    text("GAME OVER", w/2 - 130, h/2);
    textSize(12);
    text("Press C to restart",w/2 - 100, h/2+ 30);
    tScore = 0;
    noLoop();
}