var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Arrow = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_arrow";
	config.htmlFile = config.htmlFile || "src/board/arrow.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Arrow.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Arrow.prototype.setTestconfig = function () {
};
BOARDFUL.ui.Arrow.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	$(this.canvas).css({
		transform: "rotate(120deg)"
	});
};