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
        player.walk(LEFT_ARROW)
    }

    if (keyIsDown(RIGHT_ARROW)) {
        player.walk(RIGHT_ARROW)
    }

    if (keyIsDown(UP_ARROW)) {
        player.walk(UP_ARROW)
    }

    if (keyIsDown(DOWN_ARROW)) {
        player.walk(DOWN_ARROW)
    }

    // if (keyIsDown(SPACE)) {
    //     player.dash()
    // }

    player.display()
}

function mouseClicked(e) {
    // console.log("mouse clicked!!!")
    console.log(e)

    // player.dashX = e.clientX
    // player.dashY = e.clientY
    player.dash(e.clientX, e.clientY)
}

function calculateSlope(ax, ay, bx, by) {
    return (by - ay)/(bx - ax)
}