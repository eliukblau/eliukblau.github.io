"use strict";

(function () {

    var root = this;

    // namespace
    var Demo = root.Demo || {};
    Demo.Sprite = Demo.Sprite || {};
    root.Demo = Demo;

    // miembros
    Demo.Sprite.Cloud = dejavu.Class.declare({
        $name: "Cloud",
        $extends: Phaser.Sprite,

        _speed: 10000,

        initialize: function (game, group) {
            var x = game.rnd.integerInRange(-game.world.width / 2, -200);
            var y = game.rnd.integerInRange(20, game.world.height - 120);
            this.$super(game, x, y, "cloud", 0);
            this._speed += game.rnd.integerInRange(0, 5000);
            this.scale.set(0.5);
            this.alpha = 0.5;

            if (typeof group !== "undefined") {
                group.add(this);
            }
            else {
                game.add.existing(this);
            }

            this.createTween();
        },

        createTween: function () {
            var attrObj = { x: this.game.world.width };
            var tween = this.game.add.tween(this).to(attrObj, this._speed, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(function () {
                this.destroy();
            }, this);
        }
    })

}).call(this);