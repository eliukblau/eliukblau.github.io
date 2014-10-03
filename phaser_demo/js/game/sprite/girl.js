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

        initialize: function (game, group) {
            this.$super(game, 100, 560, "girl", 0);
            this.anchor.set(0.5);

            if (typeof group !== "undefined") {
                group.add(this);
            }
            else {
                game.add.existing(this);
            }

            this.createTweens();
        },

        createTweens: function () {
            this.game.add.tween(this)
                .to({ x: 450 }, 4500, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);

            this.game.add.tween(this)
                .to({ y: this.y - 30 }, 750, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
        }

        /*
         update: function () {
         // obtenemos el delta de tiempo
         var dt = this.game.time.elapsed;
         // calculamos animacion de la chica
         this._animAcumulator += dt * (1 / 128); // independiente de fps!

         // nuevas posiciones
         this.x = 170 + Math.sin(this._animAcumulator / 10) * 160;
         this.y = 200 + Math.sin(this._animAcumulator / 1.5) * 10;
         }
         */
    })

}).call(this);