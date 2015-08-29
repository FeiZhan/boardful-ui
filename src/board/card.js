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
	this.config.disable = this.config.disable || false;
	this.config.hoverToDisable = this.config.hoverToDisable || false;
	this.config.flip = this.config.flip || false;
	this.config.clickToFlip = this.config.clickToFlip || false;
};
BOARDFUL.ui.Card.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	var front = this.config.front;
	if (undefined !== front) {
		$(this.selector + " > .front img").attr("src", front);
	}
	var back = this.config.back;
	if (undefined !== back) {
		$(this.selector + " > .back img").attr("src", back);
	}
	var text = this.config.text;
	if (undefined !== text) {
		$(this.selector + " > .text span").html(text);
	}
	if (undefined !== this.config.cornerValue) {
		this.effect_list.push(new BOARDFUL.ui.CornerValue(this.canvas, this.config.cornerValue));
	}
	if (undefined !== this.config.draggable) {
		this.effect_list.push(new BOARDFUL.ui.Draggable(this.canvas, this.config.draggable));
	}
	if (true === this.config.disable) {
		this.fog = this.fog || new BOARDFUL.ui.Fog(this.canvas);
		this.effect_list.push(this.fog);
		setTimeout(function () {
			that.fog.enable();
		}, 500);
	}
	if (true === this.config.hoverToDisable) {
		this.fog = this.fog || new BOARDFUL.ui.Fog(this.canvas);
		this.effect_list.push(this.fog);
		$(this.canvas).hover(function () {
			that.fog.enable();
		}, function () {
			that.fog.disable();
		});
	}
	if (true === this.config.flip) {
		this.flip = this.flip || new BOARDFUL.ui.Flip(this.canvas);
		this.effect_list.push(this.flip);
		this.flip.flip();
	}
	if (true === this.config.clickToFlip) {
		this.flip = this.flip || new BOARDFUL.ui.Flip(this.canvas);
		this.effect_list.push(this.flip);
		$(this.canvas).click(function () {
			that.flip.flip();
		});
	}
};