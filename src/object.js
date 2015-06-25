var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Object = function (canvas, options) {
};
BOARDFUL.ui.Object.prototype.init = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	if (0 === $("#" + this.canvas).length) {
		console.error("invalid html selector");
		return;
	}
	this.options = options || {};
	$("#" + this.canvas).addClass(this.options.className);
	if (undefined !== this.options.htmlFile) {
		$("#" + this.canvas).load(this.options.htmlFile, function () {
			that.onLoad();
		});
	}
	else {
		this.onLoad();
	}
};
BOARDFUL.ui.Object.prototype.onLoad = function () {
};
BOARDFUL.ui.Object.prototype.destroy = function () {
};