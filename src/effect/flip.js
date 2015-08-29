var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Flip = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_flip";
	config.htmlFile = config.htmlFile || "src/effect/flip.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Flip.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Flip.prototype.setTestconfig = function () {
	this.config.flipTime = this.config.flipTime || 3000;
	this.config.flipBackTime = this.config.flipBackTime || 1500;
};
BOARDFUL.ui.Flip.prototype.onLoad = function () {
	$(this.canvas).addClass(this.config.className);
	this.setTestconfig();
};
BOARDFUL.ui.Flip.prototype.flip = function () {
	$(this.canvas + " > .boardful_card").toggleClass("flipping");
};
BOARDFUL.ui.Flip.prototype.begin = function () {
	var that = this;
	this.interval_id = setInterval(function () {
		if (! $(that.canvas + " > .boardful_card").hasClass("flipping")) {
			$(that.canvas + " > .boardful_card").addClass("flipping");
			setTimeout(function () {
				if ($(that.canvas + " > .boardful_card").hasClass("flipping")) {
					$(that.canvas + " > .boardful_card").removeClass("flipping");
				}
			}, that.config.flipBackTime);
		}
	}, that.config.flipTime);
};
BOARDFUL.ui.Flip.prototype.stop = function () {
	clearInterval(this.interval_id);
	$(this.canvas + " > .boardful_card").removeClass("flipping");
};