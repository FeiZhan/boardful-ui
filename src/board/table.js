var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Table = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_table";
	options.htmlFile = options.htmlFile || "src/board/table.html";
	this.init(canvas, options);
};
BOARDFUL.ui.Table.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Table.prototype.setTestOptions = function () {
	this.options.droppable = this.options.droppable || true;
};
BOARDFUL.ui.Table.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
	if (true === this.options.droppable) {
		$(".boardful_table").droppable({
			drop: function(event, ui) {
				$(this).html("Dropped!");
			}
		});
	}
};