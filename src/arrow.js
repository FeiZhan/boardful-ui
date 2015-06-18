var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Arrow = function (canvas, options) {
	$("#" + canvas).addClass("boardful_arrow");
	$("#" + canvas).load("src/arrow.html");
};