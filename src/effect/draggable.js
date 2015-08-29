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
	this.config.flip = this.config.flip || true;
	this.config.flipTime = this.config.flipTime || 3000;
	this.config.flipBackTime = this.config.flipBackTime || 1500;
};
BOARDFUL.ui.Draggable.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	var interval_id = undefined;
	$(this.canvas).draggable({
		revert: that.config.revert,
		start: function() {
			$(this).addClass("dragging");
			var that1 = this;
			if (true === that.config.flip) {
				interval_id = setInterval(function () {
					if (! $(that1).hasClass("flip")) {
						$(that1).addClass("flip");
						setTimeout(function () {
							if ($(that1).hasClass("flip")) {
								$(that1).removeClass("flip");
							}
						}, that.config.flipBackTime);
					}
				}, that.config.flipTime);
			}
		},
		drag: function() {
		},
		stop: function() {
			clearInterval(interval_id);
			$(this).removeClass("flip");
			$(this).removeClass("dragging");
		}
	});
};