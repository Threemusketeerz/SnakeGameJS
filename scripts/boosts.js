var boostArr = [];
var invert = false;

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
    var sp = new newBoost('speed', 20, 20);
    var bCount = 0;
    var rand = floor(random(20000, 30000));
    sp.r = 255;
    sp.g = 255;
    sp.b = 0;
    for (var i = 0; i < boostArr.length; i++) {
        var b = boostArr[i];
        if (b.id === 'speed') {
            bCount++;
        }
        // console.log(b.id);
    }
    if (bCount === 0){
        boostArr.push(sp);
        bCount++;
    }
    setTimeout(speedBoost, rand);
}

function invertControls() {
    var inv = new newBoost('invert', 20, 20);
    var invCount = 0;
    var rand = floor(random(5000, 30000));
    inv.r = 255;
    inv.g = 255;
    inv.b = 255;
    for (var i = 0; i < boostArr.length; i++) {
        b = boostArr[i];
        if (b.id === 'invert') {
            invCount++;
        }
    }
    if (invCount === 0 && invCount < 5) {
        boostArr.push(inv);
    }
    setTimeout(invertControls, rand);
}

// function extremeBoost() {
//     var ex = new newBoost('extreme', 20, 20);
//     boostArr.push(ex);
// }

/*
This boost should disguise itself as any other boost,
then it will have some random property of some calliber. 
Or just a static property it fires off when triggered.
*/
// function trollBoost () {
//     var tro = new newBoost('extreme', 40, 30);
// }

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
                // console.log(b.id);
                if (b.id === 'speed') {
                    vel = vel * 2;
                    setTimeout(function(){
                        vel = vel / 2;
                    }, 10000);
                }
                if (b.id === 'invert') {
                    invert = true;
                    setTimeout(function() {
                        invert = false;
                    }, 10000);
                }
                boostArr.splice(i, 1);
            }
        }
    }
}