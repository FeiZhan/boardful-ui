var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Player = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_player";
	config.htmlFile = config.htmlFile || "src/board/player.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Player.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Player.prototype.setTestconfig = function () {
};
BOARDFUL.ui.Player.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
	var deck = new BOARDFUL.ui.Deck(this.canvas + " > .player_deck", {
		height: "100%"
	});
};