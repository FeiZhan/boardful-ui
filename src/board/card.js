var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Card = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_card";
	config.htmlFile = config.htmlFile || "src/board/card.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Card.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Card.prototype.setTestconfig = function () {
	this.config.back = this.config.back || "resources/b2fv.png";
	this.config.text = this.config.text || "A♠";
	this.config.cornerValue = this.config.cornerValue || {};
	this.config.draggable = this.config.draggable || {};
	this.config.flip = this.config.flip || false;
	this.config.disable = this.config.disable || false;
	this.config.hoverToDisable = this.config.hoverToDisable || false;
	this.config.clickToFlip = this.config.clickToFlip || true;
};
BOARDFUL.ui.Card.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	var front = this.config.front;
	if (undefined !== front) {
		$(this.canvas + " .front img").attr("src", front);
	}
	var back = this.config.back;
	if (undefined !== back) {
		$(this.canvas + " .back img").attr("src", back);
	}
	var text = this.config.text;
	if (undefined !== text) {
		$(this.canvas + " .text span").html(text);
	}
	if (undefined !== this.config.cornerValue) {
		this.effect_list.push(new BOARDFUL.ui.CornerValue(this.canvas, this.config.cornerValue));
	}
	if (undefined !== this.config.draggable) {
		this.effect_list.push(new BOARDFUL.ui.Draggable(this.canvas, this.config.draggable));
	}
	if (true === this.config.flip) {
		$(this.canvas).addClass("flip");
	}
	if (true === this.config.disable) {
		$(this.canvas).addClass("disable");
	}
	if (true === this.config.hoverToDisable) {
		$(this.canvas).hover(function () {
			$(that.canvas).addClass("disable");
		}, function () {
			$(that.canvas).removeClass("disable");
		});
	}
	if (true === this.config.clickToFlip) {
		$(this.canvas).click(function () {
			$(that.canvas).toggleClass("flip");
		});
	}
};