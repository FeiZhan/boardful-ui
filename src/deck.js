var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Deck = function (canvas, options) {
	$("#" + canvas).addClass("boardful_deck");
	this.card_num = 7;
	var that = this;
	$("#" + canvas).load("src/deck.html", function () {
		for (var i = 0; i < that.card_num; ++ i) {
			BOARDFUL.ui.Card(i);
		}
	});
	setInterval(function () {
		that.card_num = $("#" + canvas + " div").length;
		if (that.card_num >= 5) {
			$("#" + canvas).addClass("compact");
		}
		else {
			$("#" + canvas).removeClass("compact");
		}
	}, 1000);
};