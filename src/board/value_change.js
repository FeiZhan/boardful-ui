var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.ValueChange = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_value_change";
	config.htmlFile = config.htmlFile || "src/board/value_change.html";
	this.init(canvas, config);
};
BOARDFUL.ui.ValueChange.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.ValueChange.prototype.setTestconfig = function () {
	this.config.value = this.config.value || "+100000";
	this.config.type = this.config.type || "increase";
};
BOARDFUL.ui.ValueChange.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
	$(this.canvas + " .change").html(this.config.value);
	$(this.canvas).addClass(this.config.type);
	setTimeout(function () {
		$(that.canvas).addClass("vanish");
	}, 2000);
};