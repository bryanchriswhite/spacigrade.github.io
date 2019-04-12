// game state
let player;
let enemies = [];
let stars = [];
let starCount = 200;
let points = 0;
let maxEnemies = 10;
let highScores = [];
let playing = false;

// boss
let bossStage = false;
let boss;

// images
let tardigrade;
let tardigradeInjured;
let asteroid;
let menuSelectSound;

// audio
let gameSong;
let titleSong;

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
    deathScream = loadSound('./assets/sfx_deathscream_alien6.wav');
    collisionSound = loadSound('./assets/sfx_exp_cluster2.wav');
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

    if (player.health <= 0) {
        if (playing) {
            deathScream.play()
            collisionSound.play()
            playing = false;
            highScores.push(points);
            enemies = [];
            menu.style.opacity = 1;
            highscoreTable.style.opacity = 1;
            updateHighscoreTable();
        }
        player.display();
        return;
    }

    if (!playing) {
        return
    }

    if (points % 20000 == 0 && points != 0) {
        maxEnemies += 1;
    }

    if (points % 500 == 0 && points != 0) {
        // add boss
        if (!bossStage) {
            bossStage = true;
            boss = new Boss(height / 2, width / 2, height / 3)
        }
    }

    if (bossStage) {
        if (boss.done) {
            boss = null;
            bossStage = false;
            return
        }

        if (points % 700 == 0 && boss.tangible) {
            let beamStartY = (Math.floor(Math.random() * player.y + 1) + player.y - 1)
            enemies.push(new Beam(player.y, width))
        }

        if (points % 2000 == 0 && boss.tangible) {
            enemies.push(newRisingEnemy())
        }

        boss.update();

        if (boss.collidesWith(player) && boss.tangible) {
            player.health -= 1;
        }

        boss.display();
    }

    if (enemies.length < maxEnemies && bossStage == false) {
        let enemy;
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

    for (let i = 0; i < enemies.length; i++) {
        enemies[i].update()
    }

    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].done) {
            enemies.splice(i, 1)
        }
    }

    if (playing) {
        for (h = 0; h < enemies.length; h++) {
            if (enemies[h].collidesWith(player) && enemies[h].tangible) {
                player.health -= 1;
            }
        }

        player.update()
        player.display();
        displayCursor();
    }

    for (let i = 0; i < enemies.length; i++) {
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
    let p = calculateDash(player.dashMaxDistance, player.x, player.y, mouseX, mouseY)

    stroke(255, 204, 0);
    strokeWeight(1);
    fill(52)
    line(player.x, player.y, p.x, p.y);
    ellipseMode(RADIUS);
    ellipse(p.x, p.y, 7, 7);
}

function createStarfield() {
    for (let i = 0; i < starCount; i++) {
        stars[i] = new Star();
    }
}

function moveStarField() {
    for (let i = 0; i < starCount; i++) {
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
    let xDist = x2 - x1;
    let yDist = y2 - y1;
    let dist = Math.sqrt(xDist * xDist + yDist * yDist);

    if (dist <= maxDistance) {
        let p = {
            x: x2,
            y: y2,
            distance: dist
        }
        return p
    }

    let fractionOfTotal = maxDistance / dist;

    this.dashEndX = x1 + (xDist * fractionOfTotal);
    this.dashEndY = y1 + (yDist * fractionOfTotal);

    let p = {
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
    let r = Math.floor(Math.random() * player.r * 5) + player.r * 4
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
    let r = Math.floor(Math.random() * player.r * 5) + player.r * 4
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

        for (let i = 0; i < highScores.length; i++) {
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
    player.health = 1;
    bossStage = false;
    maxEnemies = 10;
    player = new Player(canvasCenterX, canvasCenterY, 300, tardigrade, tardigradeInjured);
}
