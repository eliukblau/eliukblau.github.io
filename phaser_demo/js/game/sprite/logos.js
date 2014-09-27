"use strict";

(function () {

    var root = this;

    // namespace
    var Demo = root.Demo || {};
    Demo.Sprite = Demo.Sprite || {};
    root.Demo = Demo;

    // miembros
    Demo.Sprite.Logos = dejavu.Class.declare({
        $name: "Logos",
        $extends: Phaser.Sprite,

        _spriteBitmap: null,

        _phaser: null,
        _jslogo: null,
        _jslogoBitmap: null,
        _rasterBitmap: null,
        _rasterRect: null,

        initialize: function (game, group) {
            this._phaser = game.make.sprite(0, 0, "phaser");
            this._phaser.anchor.set(0.5);
            this._phaser.alpha = 0;

            this._jslogoBitmap = game.make.bitmapData();
            this._jslogoBitmap.load("jslogo");

            this._jslogo = game.make.sprite(0, 0, this._jslogoBitmap);
            this._jslogo.anchor.set(0.5);
            this._jslogo.alpha = 0.8;

            this._rasterRect = new Phaser.Rectangle();
            this._rasterRect.setTo(0, 0, this._jslogoBitmap.width, this._jslogoBitmap.height);

            this._rasterBitmap = game.make.bitmapData();
            this._rasterBitmap.load("raster");

            this._spriteBitmap = game.make.bitmapData(game.width, game.height);
            this.$super(game, 0, 0, this._spriteBitmap, 0);

            if (typeof group !== "undefined") {
                group.add(this);
            }
            else {
                game.add.existing(this);
            }

            game.add.tween(this._phaser)
                .to({ alpha: 1 }, 5000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);

            game.add.tween(this._jslogo.scale)
                .to({ x: 1.5, y: 1.5 }, 3000, Phaser.Easing.Elastic.InOut, true, 0, Number.MAX_VALUE, true);

            game.add.tween(this._rasterRect).to(
                { y: (this._rasterBitmap.height - this._rasterRect.height) },
                2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true
            );
        },

        update: function () {
            var dt = this.game.time.elapsed;

            this._rasterBitmap.copyRect("raster", this._rasterRect, 0, 0);
            this._jslogoBitmap.alphaMask(this._rasterBitmap, this._jslogoBitmap);

            this._spriteBitmap.clear();
            this._spriteBitmap.draw(this._jslogo, this.game.world.centerX + 200, this.game.world.centerY + 100);
            this._spriteBitmap.draw(this._phaser, this.game.world.centerX - 150, this.game.world.centerY - 100);

            this._jslogo.rotation += dt * (1 / 2048); // independiente de fps!
        }
    })

}).call(this);