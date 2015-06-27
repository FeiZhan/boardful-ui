var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Card = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_card";
	options.htmlFile = options.htmlFile || "src/card.html";
	this.init(canvas, options);
};
BOARDFUL.ui.Card.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Card.prototype.setTestOptions = function () {
	this.options.height = this.options.height || "120px";
	this.options.width = this.options.width || "90px";
	this.options.back = this.options.back || "resources/b2fv.png";
	this.options.text = this.options.text || "A♠";
	this.options.topleft = this.options.topleft || "1";
	this.options.topright = this.options.topright || "2";
	this.options.bottomleft = this.options.bottomleft || "3";
	this.options.bottomright = this.options.bottomright || "4";
	this.options.hoverShowCorner = this.options.hoverShowCorner || true;
	this.options.draggable = this.options.draggable || true;
	this.options.flip = this.options.flip || false;
	this.options.disable = this.options.disable || false;
	this.options.hoverToDisable = this.options.hoverToDisable || false;
	this.options.clickToFlip = this.options.clickToFlip || true;
};
BOARDFUL.ui.Card.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
	var front = this.options.front;
	if (undefined !== front) {
		$("#" + this.canvas + " .front img").attr("src", front);
	}
	var back = this.options.back;
	if (undefined !== back) {
		$("#" + this.canvas + " .back img").attr("src", back);
	}
	var text = this.options.text;
	if (undefined !== text) {
		$("#" + this.canvas + " .text span").html(text);
	}
	var topleft = this.options.topleft;
	if (undefined !== topleft) {
		$("#" + this.canvas + " .topleft span").html(topleft);
	}
	var topright = this.options.topright;
	if (undefined !== topright) {
		$("#" + this.canvas + " .topright span").html(topright);
	}
	var bottomleft = this.options.bottomleft;
	if (undefined !== bottomleft) {
		$("#" + this.canvas + " .bottomleft span").html(bottomleft);
	}
	var bottomright = this.options.bottomright;
	if (undefined !== bottomright) {
		$("#" + this.canvas + " .bottomright span").html(bottomright);
	}
	if (true === this.options.hoverShowCorner) {
		$("#" + this.canvas).hover(function () {
			$("#" + that.canvas + " .value").addClass("visible");
		}, function () {
			$("#" + that.canvas + " .value").removeClass("visible");
		});
	}
	if (true === this.options.draggable) {
		var interval_id = undefined;
		$("#" + this.canvas).draggable({
			revert: true,
			start: function() {
				$(this).addClass("dragging");
				var that = this;
				interval_id = setInterval(function () {
					if (! $(that).hasClass("flip")) {
						$(that).addClass("flip");
						setTimeout(function () {
							if ($(that).hasClass("flip")) {
								$(that).removeClass("flip");
							}
						}, 1500);
					}
				}, 3000);
			},
			drag: function() {
			},
			stop: function() {
				clearInterval(interval_id);
				$(this).removeClass("flip");
				$(this).removeClass("dragging");
			}
		});
	}
	if (true === this.options.flip) {
		$("#" + this.canvas).addClass("flip");
	}
	if (true === this.options.disable) {
		$("#" + this.canvas).addClass("disable");
	}
	if (true === this.options.hoverToDisable) {
		$("#" + this.canvas).hover(function () {
			$("#" + that.canvas).addClass("disable");
		}, function () {
			$("#" + that.canvas).removeClass("disable");
		});
	}
	if (true === this.options.clickToFlip) {
		$("#" + this.canvas).click(function () {
			$("#" + that.canvas).toggleClass("flip");
		});
	}
};