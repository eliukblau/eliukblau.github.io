"use strict";

(function () {

    var root = this;

    // namespace
    var Demo = root.Demo || {};
    Demo.State = Demo.State || {};
    root.Demo = Demo;

    // miembros
    Demo.State.Main = dejavu.Class.declare({
        $name: "Main",
        $extends: Phaser.State,

        _background: null,
        _music: null,
        _girl: null,

        create: function () {
            this._background = this.add.sprite(0, 0, 'background');
            this._music = this.add.audio('music', 1.0, true);
            this._music.play();

            this._girl = new Demo.Sprite.Girl(this.game, 170, 200);
        }
    })

}).call(this);