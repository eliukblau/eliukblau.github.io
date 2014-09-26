"use strict";

(function () {

    var root = this;

    // namespace
    var Demo = root.Demo || {};
    root.Demo = Demo;

    // miembros
    Demo.Game = dejavu.Class.declare({
        $name: "Game",
        $extends: Phaser.Game,

        initialize: function () {
            this.$super(800, 600, Phaser.CANVAS, '', null);

            this.state.add("boot", Demo.State.Boot, false);
            this.state.add("preloader", Demo.State.Preloader, false);
            this.state.add("main", Demo.State.Main, false);
            this.state.start("boot");
        }
    });

}).call(this);

// start Demo
window.onload = function () {
    new Demo.Game();
};
