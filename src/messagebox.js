var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.MessageBox = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	this.options = options || {};
	$("#" + this.canvas).addClass("boardful_messagebox");
	$("#" + this.canvas).load("src/messagebox.html", function () {
		that.init();
	});
};
BOARDFUL.ui.MessageBox.prototype.init = function () {
	var that = this;
	setInterval(function () {
		$("#" + that.canvas).append('<div class="message"></div>');
		$("#" + that.canvas + " .message:last-child").html("sadfsadfasd");
		var current = $("#" + that.canvas + " .message:last-child");
		setTimeout(function () {
			current.addClass("close");
		}, 5000);
	}, 3000);
};