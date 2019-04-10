var player;

var DOWN = 0
var UP = 2
var LEFT = 3
var RIGHT = 1

function setup() {
    createCanvas(400, 400);
    player = new Player(100, 100);
}

function draw() {
    background(0);

    if (keyIsDown(LEFT_ARROW)) {
        player.move(LEFT_ARROW)
    }

    if (keyIsDown(RIGHT_ARROW)) {
        player.move(RIGHT_ARROW)
    }

    if (keyIsDown(UP_ARROW)) {
        player.move(UP_ARROW)
    }

    if (keyIsDown(DOWN_ARROW)) {
        player.move(DOWN_ARROW)
    }

    player.display()
}