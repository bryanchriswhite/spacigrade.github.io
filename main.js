// game state
var player;
var enemies = [];
var stars = [];
var starCount = 200;
var points = 0;
var maxEnemies = 10;
var highScores = [];
let playing = false;

// images
var tardigrade;
var tardigradeInjured;
var asteroid;
var menuSelectSound;

// audio
var gameSong;
var titleSong;

// Keyboard input
const SPACE_KEY = 32;
const W_KEY = 87;
const A_KEY = 65;
const S_KEY = 83;
const D_KEY = 68;
const MUTE_KEY = 77;
const CREDITS_KEY = 67;

// html and sizing
let canvasWidth, canvasHeight, canvasCenterX, canvasCenterY,
    menu, start, highscoreTable;

function preload() {
    menuSelectSound = loadSound('./assets/sfx_menu_select4.wav');
    gameSong = loadSound('./assets/summerspot.mp3');
    titleSong = loadSound('./assets/horizon.mp3');
    asteroid = loadImage('./assets/simpleasteroid.png');
    tardigrade = loadImage('./assets/tardigrade.png');
    tardigradeInjured = loadImage('./assets/tardigrade_no-bubble.png');
}

function setup() {
    canvasWidth = window.innerWidth * .99;
    canvasHeight = window.innerHeight * .99;
    createCanvas(canvasWidth, canvasHeight);

    canvasCenterX = canvasWidth / 2;
    canvasCenterY = canvasHeight / 2;
    createStarfield();
    player = new Player(canvasCenterX, canvasCenterY, 300, tardigrade, tardigradeInjured);
}


function draw() {
    background(0);
    moveStarField();
    displayScore();

    if (playing && !gameSong.isPlaying()) {
        titleSong.stop();
        gameSong.play();
    } else if (!playing && !titleSong.isPlaying()) {
        gameSong.stop();
        titleSong.play();
    }

    if (!playing) {
        return
    }

    if (player.health <= 0) {
        if (playing) {
            playing = false;
            highScores.push(points);
            enemies = [];
            menu.style.opacity = 1;
            highscoreTable.style.opacity = 1;
            updateHighscoreTable();
        }
        return;
    }

    if (points % 20000 == 0) {
        maxEnemies += 1;
    }

    if (enemies.length < maxEnemies) {
        var enemy;
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                enemy = newFallingEnemy();
                break;
            case 1:
                enemy = newRisingEnemy();
                break;
            default:
                enemy = newExpandingEnemy();
                break
        }

        if (dist(enemy.x, enemy.y, player.x, player.y) > player.r * 2) {
            enemies.push(enemy)
        }
    }

    for (var i = 0; i < enemies.length; i++) {
        enemies[i].update()
    }

    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].done) {
            enemies.splice(i, 1)
        }
    }

    if (playing) {
        for (h = 0; h < enemies.length; h++) {
            if (player.collidesWith(enemies[h]) && enemies[h].tangible) {
                player.health -= 1;
            }
        }

        player.update()
        player.display();
        displayCursor();
    }

    for (var i = 0; i < enemies.length; i++) {
        enemies[i].display()
    }

    if (!playing) return;
    points += 10;
}

function mouseClicked(e) {
    if (playing) {
        player.initializeDash(e.clientX, e.clientY)
        return
    }
}

function keyPressed() {
    if (keyCode == MUTE_KEY) {
        let vol = getMasterVolume()
        if (vol == 1.0) {
            masterVolume(0)
        } else {
            masterVolume(1.0)
        }
    }

    if (keyCode == CREDITS_KEY && !playing) {
        if (document.getElementById('credits').style.opacity == 0) {
            document.getElementById('credits').style.opacity = 1;
        } else {
            document.getElementById('credits').style.opacity = 0;
        }
    }

    if (keyCode == SPACE_KEY) {
        player.initializeDash(mouseX, mouseY)
    }
}

function displayCursor() {
    if (player.dashing) {
        return
    }
    var p = calculateDash(player.dashMaxDistance, player.x, player.y, mouseX, mouseY)

    stroke(255, 204, 0);
    strokeWeight(1);
    fill(52)
    line(player.x, player.y, p.x, p.y);
    ellipseMode(RADIUS);
    ellipse(p.x, p.y, 7, 7);
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

function distance(x1, y1, x2, y2) {
    xDist = x1 - x2;
    yDist = y1 - y2;

    return Math.sqrt(xDist * xDist + yDist * yDist);
}

function calculateDash(maxDistance, x1, y1, x2, y2) {
    var xDist = x2 - x1;
    var yDist = y2 - y1;
    var dist = Math.sqrt(xDist * xDist + yDist * yDist);

    if (dist <= maxDistance) {
        var p = {
            x: x2,
            y: y2,
            distance: dist
        }
        return p
    }

    var fractionOfTotal = maxDistance / dist;

    this.dashEndX = x1 + (xDist * fractionOfTotal);
    this.dashEndY = y1 + (yDist * fractionOfTotal);

    var p = {
        x: x1 + (xDist * fractionOfTotal),
        y: y1 + (yDist * fractionOfTotal),
        distance: maxDistance
    }
    return p
}

function displayScore() {
    fill(255, 255, 255)
    stroke(0);
    strokeWeight(0);
    textSize(12);
    text(points + ' points', 10, 20);
}

function newExpandingEnemy() {
    return new ExpandingEnemy(
        Math.floor(Math.random() * width),
        Math.floor(Math.random() * height),
        Math.floor(Math.random() * 2) + 1,
        Math.floor(Math.random() * 100) + 80
    )
}

function newFallingEnemy() {
    var r = Math.floor(Math.random() * player.r * 5) + player.r * 4
    return new FallingEnemy(
        Math.floor(Math.random() * width),
        -(2 * r),
        Math.floor(Math.random() * width),
        height + 2 * r,
        Math.floor(Math.random() * 3) + 1,
        r,
        asteroid
    )
}

function newRisingEnemy() {
    var r = Math.floor(Math.random() * player.r * 5) + player.r * 4
    return new FallingEnemy(
        Math.floor(Math.random() * width),
        height + 2 * r,
        Math.floor(Math.random() * width),
        -(2 * r),
        Math.floor(Math.random() * 3) + 1,
        r,
        asteroid
    )
}

document.addEventListener('DOMContentLoaded', function (e) {
    menu = document.getElementById('menu');
    start = document.getElementById('start');
    highscoreTable = document.getElementById('highscore');
    start.addEventListener('click', function (e) {
        reset()
        menu.style.opacity = 0;
        highscoreTable.style.opacity = 0;
        menuSelectSound.play();
    });
});

function updateHighscoreTable() {

    if (highScores.length > 0) {
        highScores.sort((a, b) => b - a);
        highscoreTable.innerHTML = '<h2>high scores</h2><br />'

        for (var i = 0; i < highScores.length; i++) {
            if (i == 5) {
                break
            }

            highscoreTable.innerHTML = highscoreTable.innerHTML + highScores[i] + '<br /><br />'
        }
    }
}

function reset() {
    points = 0
    playing = true;
    player.health = 1
    player = new Player(canvasCenterX, canvasCenterY, 300, tardigrade, tardigradeInjured);
}
