var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Reminder = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_reminder";
	config.htmlFile = config.htmlFile || "src/board/reminder.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Reminder.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Reminder.prototype.setTestconfig = function () {
	this.config.text = this.config.text || "test test test!!!";
};
BOARDFUL.ui.Reminder.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
	$(this.canvas + " > span").html(this.config.text);
	setTimeout(function () {
		$(that.canvas).css({
			opacity: 0
		});
	}, 2000);
};