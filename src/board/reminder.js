var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Reminder = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_reminder";
	options.htmlFile = options.htmlFile || "src/board/reminder.html";
	this.init(canvas, options);
};
BOARDFUL.ui.Reminder.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Reminder.prototype.setTestOptions = function () {
	this.options.text = this.options.text || "test test test!!!";
};
BOARDFUL.ui.Reminder.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
	$("#" + this.canvas + " > span").html(this.options.text);
	setTimeout(function () {
		$("#" + that.canvas).css({
			opacity: 0
		});
	}, 2000);
};