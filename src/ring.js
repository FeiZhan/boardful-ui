var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Ring = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	this.options = options || {};
	$("#" + this.canvas).addClass("boardful_ring");
	$("#" + this.canvas).load("src/ring.html", function () {
		that.init();
	});
};
BOARDFUL.ui.Ring.prototype.init = function () {
	$("#" + this.canvas + " .change").html("+100000");
	$("#" + this.canvas).addClass("increase");
};