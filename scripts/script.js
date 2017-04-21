var posx, posy, fruitx, fruity, cnv;
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
var fps = 20;

function preload() {
    fruit = loadImage("images/fruit.png");
    bitFont = loadFont("font/PressStart2P.ttf");
}

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function setup() {
    frameRate(fps);
    // pixelDensity(5.0);
    cnv = createCanvas(w, h);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    centerCanvas();

    spawnRedFruit();
    speedBoost();
    invertControls();
    // spawnDefFruit();
    // setInterval(spawnRedFruit, rand);
    // fruitx = floor(random(30, w - 30));
    // fruity = floor(random(30, h - 30));
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

    fill(255);
    ellipse(posx, posy, 15);
    ellipseMode(CENTER);

    //fruit
    spawnCollision(fruitArr);
    drawNewFruit();
    fruitCollision();
    spawnDefFruit();

    //boosts
    // speedBoost();
    boostCollision();   
    drawBoost();
    spawnCollision(boostArr);

    snake();
    scoreVis();
    // strokeWeight(5);
    
    // controls();
}
function scoreVis() {
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
    //Fix score 0 problem.
    if (keyCode === 67) {
        keyCount++;
        tScore = 0;
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
    noLoop();
}


function windowResized() {
    centerCanvas();
}

