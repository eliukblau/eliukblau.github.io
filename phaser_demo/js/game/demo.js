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
            //this.$super(800, 600, this.isMobileSafari() ? Phaser.CANVAS : Phaser.AUTO, "game", null);
            this.$super(800, 600, Phaser.AUTO, "game", null);

            this.state.add("boot", Demo.State.Boot, false);
            this.state.add("preloader", Demo.State.Preloader, false);
            this.state.add("main", Demo.State.Main, false);

            this.state.start("boot");
        }

        // isMobileSafari: function () {
        //     var UA = window.navigator.userAgent;
        //     return UA.match(/(iPod|iPhone|iPad)/) && !UA.match(/CriOS/);
        // }
    });

}).call(this);

// start Demo
window.onload = function () {
    new Demo.Game();
};
