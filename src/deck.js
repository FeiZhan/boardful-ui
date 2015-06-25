var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Deck = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_deck";
	options.htmlFile = options.htmlFile || "src/deck.html";
	this.card_num = 0;
	this.init(canvas, options);
};
BOARDFUL.ui.Deck.prototype = BOARDFUL.ui.Object.prototype;
BOARDFUL.ui.Deck.prototype.setTestOptions = function () {
	this.options.height = this.options.height || "20%";
	this.options.width = this.options.width || "40%";
	for (var i = 0; i < 2; ++ i) {
		$("#" + this.canvas).append('<div id="' + this.card_num + '"></div>');
		new BOARDFUL.ui.Card(this.card_num);
		++ this.card_num;
	}
};
BOARDFUL.ui.Deck.prototype.onLaoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
	/*setInterval(function () {
		that.card_num = $("#" + canvas + " div").length;
		if (that.card_num >= 5) {
			$("#" + canvas).addClass("compact");
		}
		else {
			$("#" + canvas).removeClass("compact");
		}
	}, 1000);*/
};