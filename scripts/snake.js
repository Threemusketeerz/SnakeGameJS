var tLength, tailx, taily, vel;
vel = 5;
tLength = 0;
var tailArr = [];
var tScore = 0;
var contr = {
    up: false,
    left: false,
    right: false,
    down: false
};

function snake() {

    //make this object based.
    tailArr.unshift([posx, posy]);
    tailArr = tailArr.slice(0, tLength-1);
    // console.log(posx, posy, tailArr);
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

    //Can make for loop to only replace either y or x to 0 or w.
    if(posx >= w || 
    posx <= 2 ||
    posy >= h ||
    posy <= 2) {
        reset();
    }
    controls();
    collision(posx, posy);
    // console.log("Pos: " + posx, posy);
    // console.log("tail: ", tailArr);
}

function controls() {

    //using object to manage controls, this limits the controls ex. up can't go down.
    //THIS NEEDS TWEAKING, MULTIPLE INPUTS CAN BE PUT IN
    if (invert === false) {
        if (keyCode === UP_ARROW && contr.down === false) {
            // console.log("up");
            contr.up = true;
            contr.left = false;
            contr.right = false;
            contr.down = false;
        }
        if (keyCode === LEFT_ARROW && contr.right === false){
            // console.log("left");
            contr.up = false;
            contr.left = true;
            contr.right = false;
            contr.down = false;
        }
        if (keyCode === RIGHT_ARROW && contr.left === false){
            // console.log("right");
            contr.up = false;
            contr.left = false;
            contr.right = true;
            contr.down = false;
        }
        if (keyCode === DOWN_ARROW && contr.up === false) {
            // console.log("down");
            contr.up = false;
            contr.left = false;
            contr.right = false;
            contr.down = true;
        }
    }

    if (invert === true) {
        if (keyCode === DOWN_ARROW && contr.down === false) {
            // console.log("up");
            contr.up = true;
            contr.left = false;
            contr.right = false;
            contr.down = false;
        }
        if (keyCode === RIGHT_ARROW && contr.right === false){
            // console.log("left");
            contr.up = false;
            contr.left = true;
            contr.right = false;
            contr.down = false;
        }
        if (keyCode === LEFT_ARROW && contr.left === false){
            // console.log("right");
            contr.up = false;
            contr.left = false;
            contr.right = true;
            contr.down = false;
        }
        if (keyCode === UP_ARROW && contr.up === false) {
            // console.log("down");
            contr.up = false;
            contr.left = false;
            contr.right = false;
            contr.down = true;
        }
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

function collision(x, y) {
    for (var i = 1; i < tailArr.length; i++) {
        if (tailArr[i][0] === x && tailArr[i][1] === y){
            reset();  
        }
    }
}