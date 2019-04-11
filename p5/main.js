var player;
var enemies = [];
var stars = [];
var starCount = 200;
var points = 0;
function setup() {
    createCanvas(displayWidth * .99, displayHeight * .89);
    createStarfield();
    player = new Player(displayWidth / 2, displayHeight / 2);
}

function draw() {
    background(0);
    moveStarField();

    //generate enemies

    player.update()
    player.display()

    points += 10

    textSize(12);
    text(points + ' points', 10, 20);
    fill(0, 102, 153);
}

function mouseClicked(e) {
    player.initializeDash(e.clientX, e.clientY)
}

function createStarfield() {
    for (var i = 0; i < starCount; i++) {
        stars[i] = new Star();
    }
}

function moveStarField() {
    for (var i = 0; i < starCount; i++) {
        stars[i].move();
        stars[i].display();
    }
}