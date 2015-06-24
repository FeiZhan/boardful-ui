var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Reminder = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	this.options = options || {};
	$("#" + this.canvas).addClass("boardful_reminder");
	$("#" + this.canvas).load("src/reminder.html", function () {
		that.init();
	});
};
BOARDFUL.ui.Reminder.prototype.init = function () {
	$("#" + this.canvas + " span").html("test test test!!!");
	$("#" + this.canvas).css({
		opacity: 0
	});
};