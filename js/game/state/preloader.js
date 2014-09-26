"use strict";

(function () {

    var root = this;

    // namespace
    var Demo = root.Demo || {};
    Demo.State = Demo.State || {};
    root.Demo = Demo;

    // miembros
    Demo.State.Preloader = dejavu.Class.declare({
        $name: "Preloader",
        $extends: Phaser.State,

        _preloadBar: null,

        preload: function () {
            //  Set-up our preloader sprite
            this._preloadBar = this.add.sprite(100, 100, 'preloadBar');
            this.load.setPreloadSprite(this._preloadBar);

            //  Load our actual games assets
            this.load.image('girl', 'asset/sprite/girl.png');
            this.load.image('background', 'asset/sprite/background.png');
            this.load.audio('music', ['asset/audio/music.mp3', 'asset/audio/music.ogg'], true);
        },

        create: function () {
            var tween = this.add.tween(this._preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startDemo, this);
        },

        startDemo: function () {
            this.game.state.start('main', true, false);
        }
    });

}).call(this);