var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Object = function (canvas, config) {
};
BOARDFUL.ui.Object.prototype.init = function (canvas, config) {
	var that = this;
	this.canvas = canvas;
	if (0 === $("#" + this.canvas).length) {
		console.error("invalid html selector");
		return;
	}
	this.config = config || {};
	$("#" + this.canvas).addClass(this.config.className);
	if (undefined !== this.config.htmlFile) {
		$("#" + this.canvas).load(this.config.htmlFile, function () {
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