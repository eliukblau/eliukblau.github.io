/// <reference path="../phaser/phaser.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Demo;
(function (Demo) {
    /*** CLASES ***/
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);

            this.state.add('boot', Demo.BootState, false);
            this.state.add('preloader', Demo.PreloaderState, false);
            this.state.add('demo', Demo.DemoState, false);

            this.state.start('boot');
        }
        return Game;
    })(Phaser.Game);
    Demo.Game = Game;

    var BootState = (function (_super) {
        __extends(BootState, _super);
        function BootState() {
            _super.apply(this, arguments);
        }
        BootState.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/sprite/preload_bar.png');
        };

        BootState.prototype.create = function () {
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
        };
        return BootState;
    })(Phaser.State);
    Demo.BootState = BootState;

    var PreloaderState = (function (_super) {
        __extends(PreloaderState, _super);
        function PreloaderState() {
            _super.apply(this, arguments);
        }
        PreloaderState.prototype.preload = function () {
            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite(100, 100, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            //  Load our actual games assets
            this.load.image('girl', 'assets/sprite/girl.png');
            this.load.image('background', 'assets/sprite/background.png');
            this.load.audio('music', ['assets/audio/music.mp3', 'assets/audio/music.ogg'], true);
        };

        PreloaderState.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startDemo, this);
        };

        PreloaderState.prototype.startDemo = function () {
            this.game.state.start('demo', true, false);
        };
        return PreloaderState;
    })(Phaser.State);
    Demo.PreloaderState = PreloaderState;

    var DemoState = (function (_super) {
        __extends(DemoState, _super);
        function DemoState() {
            _super.apply(this, arguments);
        }
        DemoState.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'background');
            this.music = this.add.audio('music', 1.0, true);
            this.music.play();

            this.girl = new Demo.Girl(this.game, 170, 200);
        };
        return DemoState;
    })(Phaser.State);
    Demo.DemoState = DemoState;

    var Girl = (function (_super) {
        __extends(Girl, _super);
        function Girl(game, x, y) {
            _super.call(this, game, x, y, 'girl', 0);
            this.animAcumulator = 0;
            game.add.existing(this);
        }
        Girl.prototype.update = function () {
            // obtenemos el delta de tiempo
            var dt = this.game.time.elapsed;

            // calculamos animacion de la chica
            this.animAcumulator += dt * (1 / 128);

            // nuevas posiciones
            this.x = 160 + Math.sin(this.animAcumulator / 10) * 150;
            this.y = 200 + Math.sin(this.animAcumulator / 1.5) * 10;
        };
        return Girl;
    })(Phaser.Sprite);
    Demo.Girl = Girl;

    /*** FIN DE CLASES ***/
    // start game!
    window.onload = function () {
        new Demo.Game();
    };
})(Demo || (Demo = {}));
//# sourceMappingURL=demo.js.map
