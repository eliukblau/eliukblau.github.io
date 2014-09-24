/// <reference path="../phaser/phaser.d.ts" />

module Demo {

    /*** CLASES ***/

    export class Game extends Phaser.Game {

        constructor() {
            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add('boot', Demo.BootState, false);
            this.state.add('preloader', Demo.PreloaderState, false);
            this.state.add('demo', Demo.DemoState, false);

            this.state.start('boot');
        }

    }


    export class BootState extends Phaser.State {

        preload() {
            this.load.image('preloadBar', 'assets/sprite/preload_bar.png');
        }

        create() {
            // Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
            this.input.maxPointers = 1;

            // Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;

            // This tells the game to resize the renderer to match the game dimensions (i.e. 100% browser width / height)

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.scale.minWidth = 320;
            this.game.scale.minHeight = 240;
            //this.game.scale.maxWidth = 800;
            //this.game.scale.maxHeight = 600;
            this.game.scale.setScreenSize(true);
            this.game.scale.refresh();

            this.game.state.start('preloader', true, false);
        }

    }


    export class PreloaderState extends Phaser.State {

        preloadBar:Phaser.Sprite;

        preload() {
            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite(100, 100, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            //  Load our actual games assets
            this.load.image('girl', 'assets/sprite/girl.png');
            this.load.image('background', 'assets/sprite/background.png');
            this.load.audio('music', ['assets/audio/music.mp3', 'assets/audio/music.ogg'], true);
        }

        create() {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startDemo, this);
        }

        startDemo() {
            this.game.state.start('demo', true, false);
        }

    }


    export class DemoState extends Phaser.State {

        background:Phaser.Sprite;
        music:Phaser.Sound;
        girl:Demo.Girl;

        create() {
            this.background = this.add.sprite(0, 0, 'background');
            this.music = this.add.audio('music', 1.0, true);
            this.music.play();

            this.girl = new Demo.Girl(this.game, 170, 200);
        }

    }


    export class Girl extends Phaser.Sprite {

        animAcumulator:number = 0;

        constructor(game:Phaser.Game, x:number, y:number) {
            super(game, x, y, 'girl', 0);
            game.add.existing(this);
        }

        update() {
            // obtenemos el delta de tiempo
            var dt:number = this.game.time.elapsed;

            // calculamos animacion de la chica
            this.animAcumulator += dt * (1/128);

            // nuevas posiciones
            this.x = 160 + Math.sin(this.animAcumulator/10) * 150;
            this.y = 200 + Math.sin(this.animAcumulator/1.5) * 10;
        }

    }

    /*** FIN DE CLASES ***/


        // start game!
    window.onload = () => {
        new Demo.Game();
    };

}