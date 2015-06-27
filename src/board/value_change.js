var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.ValueChange = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_value_change";
	options.htmlFile = options.htmlFile || "src/board/value_change.html";
	this.init(canvas, options);
};
BOARDFUL.ui.ValueChange.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.ValueChange.prototype.setTestOptions = function () {
	this.options.value = this.options.value || "+100000";
	this.options.type = this.options.type || "increase";
};
BOARDFUL.ui.ValueChange.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
	$("#" + this.canvas + " .change").html(this.options.value);
	$("#" + this.canvas).addClass(this.options.type);
	setTimeout(function () {
		$("#" + that.canvas).addClass("vanish");
	}, 2000);
};