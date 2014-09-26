"use strict";

(function () {

    var root = this;

    // namespace
    var Demo = root.Demo || {};
    Demo.Sprite = Demo.Sprite || {};
    root.Demo = Demo;

    // miembros
    Demo.Sprite.Girl = dejavu.Class.declare({
        $name: "Girl",
        $extends: Phaser.Sprite,

        _animAcumulator: 0,

        initialize: function (game, x, y) {
            this.$super(game, x, y, 'girl', 0);
            game.add.existing(this);
        },

        update: function () {
            // obtenemos el delta de tiempo
            // var dt = this.game.time.elapsed;
            // calculamos animacion de la chica
            // this._animAcumulator += dt * (1 / 128); // framerate independent!

            // calculamos animacion de la chica
            this._animAcumulator += 1/8;

            // nuevas posiciones
            this.x = 160 + Math.sin(this._animAcumulator / 10) * 150;
            this.y = 200 + Math.sin(this._animAcumulator / 1.5) * 10;
        }
    })

}).call(this);