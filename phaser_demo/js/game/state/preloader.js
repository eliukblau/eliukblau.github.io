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
            this._preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, "preloadBar");
            this._preloadBar.anchor.set(0.5);
            this.load.setPreloadSprite(this._preloadBar);

            //  Load our actual games assets
            this.load.image("girl", "asset/sprite/girl.png");
            this.load.image("cloud", "asset/sprite/cloud.png");
            this.load.image("background", "asset/sprite/background.png");
            this.load.audio("music", ["asset/audio/music.mp3", "asset/audio/music.ogg"], true);
        },

        create: function () {
            var tween = this.add.tween(this._preloadBar).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this._showText, this);
        },

        _showText: function () {
            var style = { font: "60px Arial", fill: "#FFFFFF", align: "center" };
            var text = this.add.text(this.world.centerX, this.world.centerY, "Tap or Click to Start! :)", style);
            text.anchor.set(0.5);
            text.alpha = 0;

            var tween = this.add.tween(text).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this._touchToStartListener, this);
        },

        _touchToStartListener: function () {
            this.game.input.onDown.addOnce(this._startDemo, this);
        },

        _startDemo: function () {
            this.game.state.start("main", true, false);
        }
    });

}).call(this);