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

        _backgroundGroup: null,
        _cloudGroup: null,
        _girlGroup: null,

        create: function () {
            var music = this.add.audio("music", 1.0, true);
            music.play();

            this._backgroundGroup = this.add.group();
            this._cloudGroup = this.add.group();
            this._girlGroup = this.add.group();

            this._backgroundGroup.z = 0;
            this._cloudGroup.z = 1;
            this._girlGroup.z = 2;

            this.game.world.sort();

            this._backgroundGroup.create(0, 0, "background");
            new Demo.Sprite.Girl(170, 200, this.game, this._girlGroup);

            this._createCloud();
            this.game.time.events.loop(2500, this._createCloud, this);
        },

        _createCloud: function () {
            new Demo.Sprite.Cloud(this.game, this._cloudGroup);
        }
    })

}).call(this);