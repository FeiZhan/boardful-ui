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
};
BOARDFUL.ui.Deck.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
};
BOARDFUL.ui.Deck.prototype.adjust = function (num) {
	while ($(this.selector + " > .left > div").length > $(this.selector + " > .right > div").length + 1) {
		var element = $(this.selector + " > .left :first-child").detach();
		$(this.selector + " > .right").append(element);
	}
	while ($(this.selector + " > .right > div").length > $(this.selector + " > .left > div").length + 1) {
		var element = $(this.selector + " > .right :first-child").detach();
		$(this.selector + " > .left").append(element);
	}
	this.card_num = $(this.selector + " > div > div").length;
	if (this.card_num >= 10) {
		$(this.selector).addClass("compact");
	}
	else {
		$(this.selector).removeClass("compact");
	}
};
BOARDFUL.ui.Deck.prototype.addCards = function (num) {
	for (var i = 0; i < num; ++ i) {
		$(this.selector + " .left").append('<div id="' + this.card_num + '"></div>');
		var card = new BOARDFUL.ui.Card("#" + this.card_num);
		++ this.card_num;
	}
	this.adjust();
};