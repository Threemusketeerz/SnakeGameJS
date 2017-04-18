function fruitSpawn() {
    image(fruit, fruitx, fruity, fW, fH);
    imageMode(CENTER);
    if (posx >= fruitx - 12 && posx <= fruitx + 12 && posy >= fruity - 12 && posy <= fruity + 12) {
        tLength += 100;
        fruitx = floor(random(30, w - 30));
        fruity = floor(random(30, h - 30));
        image(fruit, fruitx, fruity, fW, fH);
        tScore += 10;
    }
    for (var i = 0; i < tailArr.length - 1; i++) {
        if ((fruitx === tailArr[i][0] && fruity === tailArr[i][1]) ||
            (fruitx === posx && fruity === posy)) {
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

// var redFruit = new newFruit(20, 50);
// console.log(redFruit);