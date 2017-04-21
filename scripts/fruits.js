var rFruitSp;
var fruitArr = [];

//perhaps move this into script.js
function spawnCollision(arr) {
    if(arr.length > 0 && tailArr.length >= 5) {
        for (var i = 0; i < tailArr.length - 1; i++) {
            for (var j = 0; j < arr.length - 1; j++) {
                var a = arr[j];
                if ((a.x <= tailArr[i][0] + 5 
                && a.x >= tailArr[i][0] - 5 
                && a.y <= tailArr[i][1] + 5 
                && a.y >= tailArr[i][1] - 5) 
                || (a.x === posx && a.x === posy)) {
                        console.log("Tail/head is in the way, respawning " + a.id);
                        a.x = floor(random(30, w - 30));
                        a.y = floor(random(30, h - 30));
                }
            }
        }
    }
}

function newFruit(score, tail) {
    this.x = floor(random(30, w - 30));
    this.y = floor(random(30, h - 30));
    this.score = score;
    this.tailExt = tail;
}

function spawnDefFruit() {
    var defFruitC = 0;
    var defFruit = new newFruit(10, 10);
    defFruit.r = 0;
    defFruit.g = 255;
    defFruit.b = 0;
    defFruit.id = 'def';
    for(var i = 0; i < fruitArr.length; i++) {
        f = fruitArr[i];
        if (f.id === 'def') {
            defFruitC++;
        }
    }
    if (defFruitC === 0) {
        fruitArr.push(defFruit);
        defFruitC++;
    }
}

function spawnRedFruit() {
    var rand = floor(random(5000, 20000));
    var redFruit = new newFruit(30, 30);
    redFruit.r = 255;
    redFruit.g = 0;
    redFruit.b = 0;
    redFruit.id = 'red';
    fruitArr.push(redFruit);
    setTimeout(spawnRedFruit, rand);
}

function drawNewFruit() {
    if(fruitArr.length !== undefined) {
        for (var i = 0; i < fruitArr.length; i++) {
            var f = fruitArr[i];
            fill(f.r, f.g, f.b);
            ellipse(fruitArr[i].x, fruitArr[i].y, 20);
        }
    }
}


//This can be used for boosts also, just minor modifications
function fruitCollision() {
    if(fruitArr.length !== undefined) {
        //For loop has to go in reverse to avoid complications with splice()
        for (var i = fruitArr.length - 1; i > -1; i--) {
            var f = fruitArr[i];
            if (posx <= f.x + 10 
            && posx >= f.x - 10
            && posy <= f.y + 10
            && posy >= f.y - 10) {
                tScore += f.score;
                tLength += f.tailExt;
                fruitArr.splice(i, 1);
            }
        }
    }
}