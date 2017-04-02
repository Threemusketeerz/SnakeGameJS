var posx, posy, fruitx, fruity;
//tail, tailx, taily;
var w = 800;
var h = 600;
var fruit;
fH = 70;
fW = 70;
posx = w/2;
posy = h/2;

function preload() {
    fruit = loadImage("images/fruit.png");
}

function setup() {
    createCanvas(w, h);
    fruitx = floor(random(0, w - 50));
    fruity = floor(random(0, h - 50));
    console.log("fruit: " + fruitx +" "+ fruity);
}

function draw() {
    background(0);

    image(fruit, fruitx, fruity, fW, fH);
    imageMode(CENTER);

    ellipse(posx, posy, 20);
    ellipseMode(CENTER);

    snake();
}