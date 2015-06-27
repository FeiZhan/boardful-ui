var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Deck = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_deck";
	options.htmlFile = options.htmlFile || "src/deck.html";
	this.card_num = 0;
	this.init(canvas, options);
};
BOARDFUL.ui.Deck.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Deck.prototype.setTestOptions = function () {
	this.options.height = this.options.height || "20%";
	this.options.width = this.options.width || "70%";
};
BOARDFUL.ui.Deck.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
};
BOARDFUL.ui.Deck.prototype.adjust = function (num) {
	while ($("#" + this.canvas + " > .left > div").length > $("#" + this.canvas + " > .right > div").length + 1) {
		var element = $("#" + this.canvas + " > .left :first-child").detach();
		$("#" + this.canvas + " > .right").append(element);
	}
	while ($("#" + this.canvas + " > .right > div").length > $("#" + this.canvas + " > .left > div").length + 1) {
		var element = $("#" + this.canvas + " > .right :first-child").detach();
		$("#" + this.canvas + " > .left").append(element);
	}
	this.card_num = $("#" + this.canvas + " > div > div").length;
	if (this.card_num >= 10) {
		$("#" + this.canvas).addClass("compact");
	}
	else {
		$("#" + this.canvas).removeClass("compact");
	}
};
BOARDFUL.ui.Deck.prototype.addCards = function (num) {
	for (var i = 0; i < num; ++ i) {
		$("#" + this.canvas + " .left").append('<div id="' + this.card_num + '"></div>');
		var card = new BOARDFUL.ui.Card(this.card_num, {
			height: "100%",
			width: "20%"
		});
		++ this.card_num;
	}
	this.adjust();
};