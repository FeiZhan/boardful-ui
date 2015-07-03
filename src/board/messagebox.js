var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.MessageBox = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_messagebox";
	config.htmlFile = config.htmlFile || "src/board/messagebox.html";
	this.init(canvas, config);
};
BOARDFUL.ui.MessageBox.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.MessageBox.prototype.setTestconfig = function () {
	this.config.height = this.config.height || "50%";
	this.config.width = this.config.width || "30%";
};
BOARDFUL.ui.MessageBox.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
};
BOARDFUL.ui.MessageBox.prototype.addMessage = function (message) {
	$(this.canvas).append('<div class="message"></div>');
	$(this.canvas + " .message:last-child").html(message);
	var current = $(this.canvas + " .message:last-child");
	setTimeout(function () {
		current.addClass("close");
	}, 5000);
};