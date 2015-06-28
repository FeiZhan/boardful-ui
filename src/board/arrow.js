var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Arrow = function (canvas, config) {
	var that = this;
	this.canvas = canvas;
	this.config = config;
	$("#" + this.canvas).addClass("boardful_arrow");
	$("#" + this.canvas).load("src/arrow.html", function () {
		that.onLoad();
	});
};
BOARDFUL.ui.Arrow.prototype.onLoad = function () {
	$("#" + this.canvas).css({
		transform: "rotate(120deg)"
	});
};