var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Object = function (canvas, config) {
};
BOARDFUL.ui.Object.prototype.init = function (canvas, config) {
	var that = this;
	this.canvas = canvas;
	if (0 === $(this.canvas).length) {
		console.error("invalid html selector", this.canvas, $(this.canvas));
		return;
	}
	this.config = config || {};
	$(this.canvas).addClass(this.config.className);
	if (undefined !== this.config.htmlFile) {
		$(this.canvas).empty();
		$(this.canvas).hide().load(this.config.htmlFile, function () {
			$(this).fadeIn("slow");
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