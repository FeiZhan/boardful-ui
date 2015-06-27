var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.MessageBox = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_messagebox";
	options.htmlFile = options.htmlFile || "src/board/messagebox.html";
	this.init(canvas, options);
};
BOARDFUL.ui.MessageBox.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.MessageBox.prototype.setTestOptions = function () {
	this.options.height = this.options.height || "50%";
	this.options.width = this.options.width || "30%";
};
BOARDFUL.ui.MessageBox.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
};
BOARDFUL.ui.MessageBox.prototype.addMessage = function (message) {
	$("#" + this.canvas).append('<div class="message"></div>');
	$("#" + this.canvas + " .message:last-child").html(message);
	var current = $("#" + this.canvas + " .message:last-child");
	setTimeout(function () {
		current.addClass("close");
	}, 5000);
};