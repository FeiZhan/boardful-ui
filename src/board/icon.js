var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Icon = function (canvas, options) {
	$("#" + canvas).addClass("boardful_icon_round");
	$("#" + canvas).load("src/icon.html");
};