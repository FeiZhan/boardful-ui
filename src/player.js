var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Player = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	this.options = options || {};
	$("#" + this.canvas).addClass("boardful_player");
	$("#" + this.canvas).load("src/player.html", function () {
		that.init();
	});
};
BOARDFUL.ui.Player.prototype.init = function () {
	var deck = new BOARDFUL.ui.Deck("player_deck");
};