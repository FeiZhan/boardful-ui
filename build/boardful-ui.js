var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Object = function (canvas, options) {
};
BOARDFUL.ui.Object.prototype.init = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	if (0 === $("#" + this.canvas).length) {
		console.error("invalid html selector");
		return;
	}
	this.options = options || {};
	$("#" + this.canvas).addClass(this.options.className);
	if (undefined !== this.options.htmlFile) {
		$("#" + this.canvas).load(this.options.htmlFile, function () {
			that.onLoad();
		});
	}
	else {
		this.onLoad();
	}
};
BOARDFUL.ui.Object.prototype.onLoad = function () {
};
BOARDFUL.ui.Object.prototype.destroy = function () {
};

var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Explosion = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	this.options = options || {};
	$("#" + this.canvas).addClass("boardful_explosion");
	$("#" + this.canvas).load("src/explosion.html", function () {
		that.init();
	});
};
BOARDFUL.ui.Explosion.prototype.init = function () {
	$("#" + this.canvas + " .change").html("+100000");
	$("#" + this.canvas).addClass("increase");
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Ring = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	this.options = options || {};
	$("#" + this.canvas).addClass("boardful_ring");
	$("#" + this.canvas).load("src/ring.html", function () {
		that.init();
	});
};
BOARDFUL.ui.Ring.prototype.init = function () {
	$("#" + this.canvas + " .change").html("+100000");
	$("#" + this.canvas).addClass("increase");
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Arrow = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	this.options = options;
	$("#" + this.canvas).addClass("boardful_arrow");
	$("#" + this.canvas).load("src/arrow.html", function () {
		that.onLoad();
	});
};
BOARDFUL.ui.Arrow.prototype.onLoad = function () {
	$("#" + this.canvas).css({
		transform: "rotate(120deg)"
	});
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Card = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_card";
	options.htmlFile = options.htmlFile || "src/board/card.html";
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
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Deck = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_deck";
	options.htmlFile = options.htmlFile || "src/board/deck.html";
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
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Icon = function (canvas, options) {
	$("#" + canvas).addClass("boardful_icon_round");
	$("#" + canvas).load("src/icon.html");
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.List = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_list";
	options.htmlFile = options.htmlFile || "src/board/list.html";
	this.items = [];
	this.init(canvas, options);
};
BOARDFUL.ui.List.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.List.prototype.setTestOptions = function () {
	this.options.height = this.options.height || "30%";
	this.options.width = this.options.width || "50%";
	this.options.image = this.options.image || "resources/b2fv.png";
};
BOARDFUL.ui.List.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
	if (undefined !== this.options.image) {
		$("#" + that.canvas + " > .preview > img").attr("src", this.options.image);
	}
};
BOARDFUL.ui.List.prototype.addItems = function (items) {
	var that = this;
	for (var i in items) {
		var content = 
'<div id="' + this.items.length + '" class="item">' +
	items[i].text +
'</div>';
		$("#" + this.canvas + " > .names").append(content);
		$("#" + this.canvas + " > .names > #" + this.items.length).mouseover(function () {
			var id = parseInt($(this).attr("id"));
			$("#" + that.canvas + " > .preview > img").attr("src", that.items[id].image);
		});
		this.items.push(items[i]);
	}
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.MessageBox = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_messagebox";
	options.htmlFile = options.htmlFile || "src/board/messagebox.html";
	this.init(canvas, options);
};
BOARDFUL.ui.MessageBox.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.MessageBox.prototype.setTestOptions = function () {
	this.options.height = this.options.height || "50%";
	this.options.width = this.options.width || "30%";
};
BOARDFUL.ui.MessageBox.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
};
BOARDFUL.ui.MessageBox.prototype.addMessage = function (message) {
	$("#" + this.canvas).append('<div class="message"></div>');
	$("#" + this.canvas + " .message:last-child").html(message);
	var current = $("#" + this.canvas + " .message:last-child");
	setTimeout(function () {
		current.addClass("close");
	}, 5000);
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Player = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_player";
	options.htmlFile = options.htmlFile || "src/board/player.html";
	this.init(canvas, options);
};
BOARDFUL.ui.Player.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Player.prototype.setTestOptions = function () {
};
BOARDFUL.ui.Player.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
	var deck = new BOARDFUL.ui.Deck("player_deck", {
		height: "100%"
	});
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Reminder = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_reminder";
	options.htmlFile = options.htmlFile || "src/board/reminder.html";
	this.init(canvas, options);
};
BOARDFUL.ui.Reminder.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Reminder.prototype.setTestOptions = function () {
	this.options.text = this.options.text || "test test test!!!";
};
BOARDFUL.ui.Reminder.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
	$("#" + this.canvas + " > span").html(this.options.text);
	setTimeout(function () {
		$("#" + that.canvas).css({
			opacity: 0
		});
	}, 2000);
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Table = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_table";
	options.htmlFile = options.htmlFile || "src/board/table.html";
	this.init(canvas, options);
};
BOARDFUL.ui.Table.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Table.prototype.setTestOptions = function () {
	this.options.droppable = this.options.droppable || true;
};
BOARDFUL.ui.Table.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
	if (true === this.options.droppable) {
		$(".boardful_table").droppable({
			drop: function(event, ui) {
				$(this).html("Dropped!");
			}
		});
	}
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.ValueChange = function (canvas, options) {
	options = options || {};
	options.className = options.className || "boardful_value_change";
	options.htmlFile = options.htmlFile || "src/board/value_change.html";
	this.init(canvas, options);
};
BOARDFUL.ui.ValueChange.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.ValueChange.prototype.setTestOptions = function () {
	this.options.value = this.options.value || "+100000";
	this.options.type = this.options.type || "increase";
};
BOARDFUL.ui.ValueChange.prototype.onLoad = function () {
	this.setTestOptions();
	var that = this;
	if (undefined !== this.options.height) {
		$("#" + this.canvas).css("height", this.options.height);
	}
	if (undefined !== this.options.width) {
		$("#" + this.canvas).css("width", this.options.width);
	}
	$("#" + this.canvas + " .change").html(this.options.value);
	$("#" + this.canvas).addClass(this.options.type);
	setTimeout(function () {
		$("#" + that.canvas).addClass("vanish");
	}, 2000);
};