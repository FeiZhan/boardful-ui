var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Card = function (canvas, options) {
	$("#" + canvas).addClass("boardful_card");
	$("#" + canvas).load("src/card.html");
};