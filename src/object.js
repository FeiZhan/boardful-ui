var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Object = function (canvas, config) {
};
BOARDFUL.ui.Object.prototype.init = function (canvas, config) {
	var that = this;
	if (0 === $(canvas).length) {
		console.error("invalid html selector", canvas, $(canvas));
		return;
	}
	this.canvas = canvas;
	this.config = config || {};
	this.selector = this.selector || this.canvas + " > ." + this.config.className;
	this.effect_list = [];
	if (undefined !== this.config.htmlFile) {
		$.get(this.config.htmlFile, function (data) {
			$(that.canvas).append(data);
			$(this.selector).hide();
			$(this.selector).fadeIn("slow");
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