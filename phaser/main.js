var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // physics: {
    //     default: 'arcade',
    //     arcade: {
    //         gravity: { y: 200 }
    //     }
    // },
    scene: {
        // preload: preload,
        create: create
    },
    backgroundColor: "#000000"
};

var game = new Phaser.Game(config);
// var graphics = new Phaser.GameObjects.Graphics(game.scene);
var graphics = game.scene.add.graphics();

function preload ()
{
    // this.load.setBaseURL('http://labs.phaser.io');
    //
    // this.load.image('sky', 'assets/skies/space3.png');
    // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    // this.load.image('red', 'assets/particles/red.png');
    this.load.image('circle', 'assets/circle.png');
}

function create ()
{
    // game.stage.backgroundColor = "#000000";
    // game.add.image(game.world.centerX, game.world.centerY, "circle")
    // this.add.image(0, 0, "circle")
    // this.add.ellipse(0, 0, 25, 50)

    graphics.fillEllipse(0,0,25,50)

    // this.add.image(400, 300, 'sky');
    //
    // var particles = this.add.particles('red');
    //
    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });
    //
    // var logo = this.physics.add.image(400, 100, 'logo');
    //
    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);
    //
    // emitter.startFollow(logo);
}