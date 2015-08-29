var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Draggable = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_draggable";
	config.htmlFile = config.htmlFile || "src/effect/draggable.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Draggable.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Draggable.prototype.setTestconfig = function () {
	this.config.revert = this.config.revert || true;
	this.config.flip = this.config.flip || {};
};
BOARDFUL.ui.Draggable.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	$(this.canvas).draggable({
		revert: that.config.revert,
		start: function() {
			$(this).addClass("dragging");
			flip.begin();
		},
		drag: function() {
		},
		stop: function() {
			$(this).removeClass("dragging");
			flip.stop();
		}
	});
	var flip;
	if (undefined !== this.config.flip) {
		flip = new BOARDFUL.ui.Flip(this.canvas, this.config.flip);
		this.effect_list.push(flip);
	}
};