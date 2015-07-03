var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Deck = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_deck";
	config.htmlFile = config.htmlFile || "src/board/deck.html";
	this.card_num = 0;
	this.init(canvas, config);
};
BOARDFUL.ui.Deck.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Deck.prototype.setTestconfig = function () {
	this.config.height = this.config.height || "20%";
	this.config.width = this.config.width || "70%";
};
BOARDFUL.ui.Deck.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
};
BOARDFUL.ui.Deck.prototype.adjust = function (num) {
	while ($(this.canvas + " > .left > div").length > $(this.canvas + " > .right > div").length + 1) {
		var element = $(this.canvas + " > .left :first-child").detach();
		$(this.canvas + " > .right").append(element);
	}
	while ($(this.canvas + " > .right > div").length > $(this.canvas + " > .left > div").length + 1) {
		var element = $(this.canvas + " > .right :first-child").detach();
		$(this.canvas + " > .left").append(element);
	}
	this.card_num = $(this.canvas + " > div > div").length;
	if (this.card_num >= 10) {
		$(this.canvas).addClass("compact");
	}
	else {
		$(this.canvas).removeClass("compact");
	}
};
BOARDFUL.ui.Deck.prototype.addCards = function (num) {
	for (var i = 0; i < num; ++ i) {
		$(this.canvas + " .left").append('<div id="' + this.card_num + '"></div>');
		var card = new BOARDFUL.ui.Card(this.card_num, {
			height: "100%",
			width: "20%"
		});
		++ this.card_num;
	}
	this.adjust();
};