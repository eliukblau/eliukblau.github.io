"use strict";

(function () {

    var root = this;

    // namespace
    var Demo = root.Demo || {};
    Demo.State = Demo.State || {};
    root.Demo = Demo;

    // miembros
    Demo.State.Boot = dejavu.Class.declare({
        $name: "Boot",
        $extends: Phaser.State,

        preload: function () {
            this.load.image('preloadBar', 'asset/sprite/preload_bar.png');
        },

        create: function () {
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
    });

}).call(this);