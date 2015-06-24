var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.ValueChange = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	this.options = options || {};
	$("#" + this.canvas).addClass("boardful_value_change");
	$("#" + this.canvas).load("src/value_change.html", function () {
		that.init();
	});
};
BOARDFUL.ui.ValueChange.prototype.init = function () {
	$("#" + this.canvas + " .change").html("+100000");
	$("#" + this.canvas).addClass("increase");
};