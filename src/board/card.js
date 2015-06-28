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
	this.config.height = this.config.height || "120px";
	this.config.width = this.config.width || "90px";
	this.config.back = this.config.back || "resources/b2fv.png";
	this.config.text = this.config.text || "A♠";
	this.config.topleft = this.config.topleft || "1";
	this.config.topright = this.config.topright || "2";
	this.config.bottomleft = this.config.bottomleft || "3";
	this.config.bottomright = this.config.bottomright || "4";
	this.config.hoverShowCorner = this.config.hoverShowCorner || true;
	this.config.draggable = this.config.draggable || true;
	this.config.flip = this.config.flip || false;
	this.config.disable = this.config.disable || false;
	this.config.hoverToDisable = this.config.hoverToDisable || false;
	this.config.clickToFlip = this.config.clickToFlip || true;
};
BOARDFUL.ui.Card.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$("#" + this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$("#" + this.canvas).css("width", this.config.width);
	}
	var front = this.config.front;
	if (undefined !== front) {
		$("#" + this.canvas + " .front img").attr("src", front);
	}
	var back = this.config.back;
	if (undefined !== back) {
		$("#" + this.canvas + " .back img").attr("src", back);
	}
	var text = this.config.text;
	if (undefined !== text) {
		$("#" + this.canvas + " .text span").html(text);
	}
	var topleft = this.config.topleft;
	if (undefined !== topleft) {
		$("#" + this.canvas + " .topleft span").html(topleft);
	}
	var topright = this.config.topright;
	if (undefined !== topright) {
		$("#" + this.canvas + " .topright span").html(topright);
	}
	var bottomleft = this.config.bottomleft;
	if (undefined !== bottomleft) {
		$("#" + this.canvas + " .bottomleft span").html(bottomleft);
	}
	var bottomright = this.config.bottomright;
	if (undefined !== bottomright) {
		$("#" + this.canvas + " .bottomright span").html(bottomright);
	}
	if (true === this.config.hoverShowCorner) {
		$("#" + this.canvas).hover(function () {
			$("#" + that.canvas + " .value").addClass("visible");
		}, function () {
			$("#" + that.canvas + " .value").removeClass("visible");
		});
	}
	if (true === this.config.draggable) {
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
	if (true === this.config.flip) {
		$("#" + this.canvas).addClass("flip");
	}
	if (true === this.config.disable) {
		$("#" + this.canvas).addClass("disable");
	}
	if (true === this.config.hoverToDisable) {
		$("#" + this.canvas).hover(function () {
			$("#" + that.canvas).addClass("disable");
		}, function () {
			$("#" + that.canvas).removeClass("disable");
		});
	}
	if (true === this.config.clickToFlip) {
		$("#" + this.canvas).click(function () {
			$("#" + that.canvas).toggleClass("flip");
		});
	}
};