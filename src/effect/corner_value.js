var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.CornerValue = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_corner_value";
	config.htmlFile = config.htmlFile || "src/effect/corner_value.html";
	this.init(canvas, config);
};
BOARDFUL.ui.CornerValue.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.CornerValue.prototype.setTestconfig = function () {
	this.config.topleft = this.config.topleft || "1";
	this.config.topright = this.config.topright || "2";
	this.config.bottomleft = this.config.bottomleft || "3";
	this.config.bottomright = this.config.bottomright || "4";
	this.config.hoverShow = this.config.hoverShow || true;
};
BOARDFUL.ui.CornerValue.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	var topleft = this.config.topleft;
	if (undefined !== topleft) {
		$(this.canvas + " .topleft span").html(topleft);
	}
	var topright = this.config.topright;
	if (undefined !== topright) {
		$(this.canvas + " .topright span").html(topright);
	}
	var bottomleft = this.config.bottomleft;
	if (undefined !== bottomleft) {
		$(this.canvas + " .bottomleft span").html(bottomleft);
	}
	var bottomright = this.config.bottomright;
	if (undefined !== bottomright) {
		$(this.canvas + " .bottomright span").html(bottomright);
	}
	if (true === this.config.hoverShow) {
		$(this.canvas).hover(function () {
			$(that.canvas + " .corner_value").addClass("visible");
		}, function () {
			$(that.canvas + " .corner_value").removeClass("visible");
		});
	}
};