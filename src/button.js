var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Button = function (canvas, options) {
	$("#" + canvas).addClass("boardful_button");
	$("#" + canvas).load("src/button.html");
	$("#" + canvas).click(function () {
		$(this).toggleClass("flip");
	});
};