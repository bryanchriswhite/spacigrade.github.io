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

    player.update()
    player.display()
}

function mouseClicked(e) {
    player.initializeDash(e.clientX, e.clientY)
}