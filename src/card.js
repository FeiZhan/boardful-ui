var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Card = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	this.options = options || {};
	$("#" + this.canvas).addClass("boardful_card");
	$("#" + this.canvas).load("src/card.html", function () {
		that.init();
	});
};
BOARDFUL.ui.Card.prototype.init = function () {
	var front = this.options.front || "";
	$("#" + this.canvas + " .front img").attr("src", front);
	var back = this.options.back || "resources/b2fv.png";
	$("#" + this.canvas + " .back img").attr("src", back);
	var text = this.options.text || "A♠";
	$("#" + this.canvas + " .text p").html(text);
	var topleft = this.options.topleft || "1";
	$("#" + this.canvas + " .topleft p").html(topleft);
	var topright = this.options.topright || "2";
	$("#" + this.canvas + " .topright p").html(topright);
	var bottomleft = this.options.bottomleft || "3";
	$("#" + this.canvas + " .bottomleft p").html(bottomleft);
	var bottomright = this.options.bottomright || "4";
	$("#" + this.canvas + " .bottomright p").html(bottomright);

	var that = this;
	$("#" + this.canvas).hover(function () {
		$("#" + that.canvas + " .value").addClass("visible");
	}, function () {
		$("#" + that.canvas + " .value").removeClass("visible");
	});
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
};