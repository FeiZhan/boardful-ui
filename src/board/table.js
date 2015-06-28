var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Table = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_table";
	config.htmlFile = config.htmlFile || "src/board/table.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Table.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Table.prototype.setTestconfig = function () {
	this.config.droppable = this.config.droppable || true;
};
BOARDFUL.ui.Table.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$("#" + this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$("#" + this.canvas).css("width", this.config.width);
	}
	if (true === this.config.droppable) {
		$(".boardful_table").droppable({
			drop: function(event, ui) {
				$(this).html("Dropped!");
			}
		});
	}
};