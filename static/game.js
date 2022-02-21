class Game extends Phaser.Scene {
    mapSize = 0;

    constructor() {
        super();
        this.moveCam = false;
    }

    preload() {
        this.load.image('bg', '../Assets/BackGround/BlankBG.png');
        this.load.image('block', '../Assets/BedTable.png');
    }

    create() {
        // game.scale.resize(window.innerWidth - 50, window.innerHeight - 50);
        this.cameras.main.setBounds(0, 0, 3000, 2000);

        for (let x = 0; x < 2; x++) {
            this.add.image(1500 * x, 0, 'bg').setOrigin(0);
            this.add.image(1500 * x, 1500, 'bg').setOrigin(0);

        }


        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(750, 750, 'block');
        this.player = this.physics.add.image(1500, 1500, 'block');
        this.cameras.main.startFollow(this.player, true);
        this.cameras.main.setZoom(1.5);
    }

    update() {
        const cam = this.cameras.main;

        this.player.setVelocity(0);

        if (this.moveCam) {
            if (this.cursors.left.isDown) {
                cam.scrollX -= 4;
            } else if (this.cursors.right.isDown) {
                cam.scrollX += 4;
            }

            if (this.cursors.up.isDown) {
                cam.scrollY -= 4;
            } else if (this.cursors.down.isDown) {
                cam.scrollY += 4;
            }
        } else {
            if (this.cursors.left.isDown) {
                this.player.setVelocityX(-400);
            } else if (this.cursors.right.isDown) {
                this.player.setVelocityX(400);
            }

            if (this.cursors.up.isDown) {
                this.player.setVelocityY(-400);
            } else if (this.cursors.down.isDown) {
                this.player.setVelocityY(400);
            }
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: window.innerWidth - 20,
    height: window.innerHeight - 20,
    pixelArt: true,
    physics: {
        default: 'arcade',
    },
    scene: [Game]
};

var moveCam = false;

const game = new Phaser.Game(config);