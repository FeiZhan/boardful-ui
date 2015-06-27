var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Player = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_player";
	options.htmlFile = options.htmlFile || "src/board/player.html";
	this.init(canvas, options);
};
BOARDFUL.ui.Player.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Player.prototype.setTestOptions = function () {
};
BOARDFUL.ui.Player.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
	var deck = new BOARDFUL.ui.Deck("player_deck", {
		height: "100%"
	});
};