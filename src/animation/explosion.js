var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Explosion = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	this.options = options || {};
	$("#" + this.canvas).addClass("boardful_explosion");
	$("#" + this.canvas).load("src/explosion.html", function () {
		that.init();
	});
};
BOARDFUL.ui.Explosion.prototype.init = function () {
	$("#" + this.canvas + " .change").html("+100000");
	$("#" + this.canvas).addClass("increase");
};