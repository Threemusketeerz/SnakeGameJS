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
    var spBoost = new newBoost('speed', 20, 20);

}

function extremeBoost() {
    var exBoost = new newBoost('extreme', 20, 20);
}

/*
This boost should disguise itself as any other boost,
then it will have some random property of some calliber. 
Or just a static property it fires off when triggered.
*/
function trollBoost () {
    var troBoost = new newBoost('extreme', 40, 30);
}