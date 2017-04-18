var rFruitSp;
var fruitArr = [];
function fruitSpawn() {
    image(fruit, fruitx, fruity, fW, fH);
    imageMode(CENTER);

    //rewrite to fit fruit objects instead.
    for (var i = 0; i < tailArr.length - 1; i++) {
        if ((fruitx <= tailArr[i][0] + 5 
        && fruitx >= tailArr[i][0] - 5 
        && fruity <= tailArr[i][1] + 5 
        && fruity >= tailArr[i][1] - 5) 
        || (fruitx === posx && fruity === posy)) {
                console.log("Tail is in the way, respawning fruit");
                fruitx = floor(random(30, w - 30));
                fruity = floor(random(30, h - 30));
        }
    }
}

function newFruit(score, tail) {
    this.x = floor(random(30, w - 30));
    this.y = floor(random(30, h - 30));
    this.score = score;
    this.tailExt = tail;
}

// function spawnDefFruit() {
//     var defFruit = new newFruit(10, 10);
//     defFruit.r = 0;
//     defFruit.g = 255;
//     defFruit.b = 0;
//     defFruit.id = 'def';
//     fruitArr.push(defFruit);

//     /*Previous version of fruit, moved to object based.*/
//     // if (posx >= fruitx - 12 
//     // && posx <= fruitx + 12 
//     // && posy >= fruity - 12 
//     // && posy <= fruity + 12) {
//     //     tLength += 100;
//     //     fruitx = floor(random(30, w - 30));
//     //     fruity = floor(random(30, h - 30));
//     //     image(fruit, fruitx, fruity, fW, fH);
//     //     tScore += 10;
//     // }
// }

function spawnRedFruit() {
    var redFruit = new newFruit(30, 30);
    redFruit.r = 255;
    redFruit.g = 0;
    redFruit.b = 0;
    redFruit.id = 'red';
    // var x = redFruit.x;
    // var y = redFruit.y;
    // var score = redFruit.score;
    // var tailExt = redFruit.tailExt;
    // console.log(redFruit);
    // fruitArr.unshift({redFruit});
    fruitArr.push(redFruit);
    // console.log(fruitArr);
}

function drawNewFruit() {
    if(fruitArr.length !== undefined) {
        for (var i = 0; i < fruitArr.length; i++) {
            var f = fruitArr[i];
            // console.log(fruitArr[i].col);
            fill(f.r, f.g, f.b);
            ellipse(fruitArr[i].x, fruitArr[i].y, 20);
        }
    }
}

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
// var redFruit = new newFruit(20, 50);
// console.log(redFruit);