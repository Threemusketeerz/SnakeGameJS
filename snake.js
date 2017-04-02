var tLength, tailx, taily;
tLength = 4;
var tailArr = [];

function snake () {
    tailArr.unshift([posx, posy]);
    tailArr = tailArr.slice(0, tLength - 1);
    beginShape();
    for (var i = 0; i < tailArr.length; i++) {
        // for (var j = 0; j < tailArr[i].length -1; j++) {
        for(var j = 0; j < tailArr[i].length; j++){
            
        }
    }
    endShape();

    if (keyIsPressed === true) {
        if (keyCode === UP_ARROW){
            posy -= 2;
        }
        if (keyCode === DOWN_ARROW){
            posy += 2;
        }
        if (keyCode === LEFT_ARROW){
            posx -= 2;
        }
        if (keyCode === RIGHT_ARROW){
            posx += 2;
        }
    }
    if (posx >= fruitx - 12 && posx <= fruitx + 12 && posy >= fruity - 12 && posy <= fruity + 12) {
        tLength++;
        fruitx = floor(random(0, w - 50));
        fruity = floor(random(0, h - 50));
        image(fruit, fruitx, fruity, fW, fH);
    }
    if(posx === w) posx = 0;
    else if (posx === 0) posx = w;
    if (posy === h) posy = 0;
    else if (posy === 0) posy = h;
    posy++;
    // for (var i = 1; i < tLength; i++) {
    //     // tailArr[0] = [posx, posy];
    //     tailArr.push(tailArr[i - 1]);
    //     // for (var j = 1; j < tailArr.length; j++) {
    //     //     tailArr.push(tailArr[j - 1]);
    //     // }
    // }
    console.log("Pos: " + posx, posy);
    console.log("tail: ", tailArr);
}