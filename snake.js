var tLength, tailx, taily, vel;
tLength = 0;
var tailArr = [];
var contr = {
    up: false,
    left: false,
    right: false,
    down: false
};

function snake () {
    vel = 2;
    tailArr.unshift([posx, posy]);
    tailArr = tailArr.slice(0, (tLength - 1));
    for (var i = 0; i < tailArr.length - 1; i++) {
        fP = tailArr[i][0];
        sP = tailArr[i][1];
        fP2 = tailArr[i+1][0];
        sP2 = tailArr[i+1][1];
        stroke(255);
        strokeWeight(10);
        line(fP, sP, fP2, sP2);
    }
    strokeWeight(1);
    // }
    if (posx >= fruitx - 12 && posx <= fruitx + 12 && posy >= fruity - 12 && posy <= fruity + 12) {
        tLength += 10;
        fruitx = floor(random(0, w - 50));
        fruity = floor(random(0, h - 50));
        image(fruit, fruitx, fruity, fW, fH);
    }

    //Can make for loop to only replace either y or x to 0 or w.
    if(posx === w) {posx = 0; tailArr = [];}
    else if (posx === 0) {posx = w; tailArr = [];}
    if (posy === h) {posy = 0; tailArr = [];}
    else if (posy === 0) {posy = h; tailArr = [];}

    controls();
    // console.log("Pos: " + posx, posy);
    // console.log("tail: ", tailArr);
}

function controls() {

    //using object to manage controls, this limits the controls ex. up can't go down.
    if (keyCode === UP_ARROW && contr.down === false) {
        console.log("up");
        contr.up = true;
        contr.left = false;
        contr.right = false;
        contr.down = false;
    }
    if (keyCode === LEFT_ARROW && contr.right === false){
        console.log("left");
        contr.up = false;
        contr.left = true;
        contr.right = false;
        contr.down = false;
    }
    if (keyCode === RIGHT_ARROW && contr.left === false){
        console.log("right");
        contr.up = false;
        contr.left = false;
        contr.right = true;
        contr.down = false;
    }
    if (keyCode === DOWN_ARROW && contr.up === false) {
        console.log("down");
        contr.up = false;
        contr.left = false;
        contr.right = false;
        contr.down = true;
    }

    if (contr.up === true) {
        posy -= vel;
    }
    if (contr.left === true) {
        posx -= vel;
    }
    if (contr.right === true) {
        posx += vel;
    }
    if (contr.down === true) {
        posy += vel;
    }
}
