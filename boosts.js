var boostArr = [];

function newBoost(id, duration, longevity) {
    this.x = floor(random(30, w - 30));
    this.y = floor(random(30, h - 30));
    this.id = id;
    this.dur = duration;
    this.lon = longevity;
}


//Might have to put all boosts inside setup for setInterval.
//How do you determine longevity of a boost.
function speedBoost() {
    var rand = floor(random(5000, 20000));
    var sp = new newBoost('speed', 20, 20);
    sp.r = 100;
    sp.g = 100;
    sp.b = 0;
    boostArr.push(sp);
    setTimeout(speedBoost, rand);
}

function extremeBoost() {
    var ex = new newBoost('extreme', 20, 20);
    boostArr.push(ex);
}

/*
This boost should disguise itself as any other boost,
then it will have some random property of some calliber. 
Or just a static property it fires off when triggered.
*/
function trollBoost () {
    var tro = new newBoost('extreme', 40, 30);
}

function drawBoost() {
    if (boostArr !== undefined) {
        for (var i = 0; i < boostArr.length; i++) {
            var ba = boostArr[i];
            fill(ba.r, ba.g, ba.b);
            rectMode(CENTER);
            rect(ba.x, ba.y, 20, 20);
        }
    }
}

function boostCollision() {
    if(boostArr.length !== undefined) {
        //For loop has to go in reverse to avoid complications with splice()
        for (var i = boostArr.length - 1; i > -1; i--) {
            var b = boostArr[i];
            if (posx <= b.x + 10 
            && posx >= b.x - 10
            && posy <= b.y + 10
            && posy >= b.y - 10) {
                boostArr.splice(i, 1);
            }
        }
    }
}