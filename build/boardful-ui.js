var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Object = function (canvas, config) {
};
BOARDFUL.ui.Object.prototype.init = function (canvas, config) {
	var that = this;
	this.canvas = canvas;
	if (0 === $(this.canvas).length) {
		console.error("invalid html selector", this.canvas, $(this.canvas));
		return;
	}
	this.config = config || {};
	$(this.canvas).addClass(this.config.className);
	if (undefined !== this.config.htmlFile) {
		$(this.canvas).empty();
		$(this.canvas).hide().load(this.config.htmlFile, function () {
			$(this).fadeIn("slow");
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

BOARDFUL.ui.Explosion = function (canvas, config) {
	var that = this;
	this.canvas = canvas;
	this.config = config || {};
	$(this.canvas).addClass("boardful_explosion");
	$(this.canvas).load("src/explosion.html", function () {
		that.init();
	});
};
BOARDFUL.ui.Explosion.prototype.init = function () {
	$(this.canvas + " .change").html("+100000");
	$(this.canvas).addClass("increase");
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Ring = function (canvas, config) {
	var that = this;
	this.canvas = canvas;
	this.config = config || {};
	$(this.canvas).addClass("boardful_ring");
	$(this.canvas).load("src/ring.html", function () {
		that.init();
	});
};
BOARDFUL.ui.Ring.prototype.init = function () {
	$(this.canvas + " .change").html("+100000");
	$(this.canvas).addClass("increase");
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Arrow = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_arrow";
	config.htmlFile = config.htmlFile || "src/board/arrow.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Arrow.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Arrow.prototype.setTestconfig = function () {
};
BOARDFUL.ui.Arrow.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	$(this.canvas).css({
		transform: "rotate(120deg)"
	});
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Board = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_board";
	config.htmlFile = config.htmlFile || "src/board/board.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Board.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Board.prototype.setTestconfig = function () {
	this.config.playerNum = this.config.playerNum || 2;
	this.config.tableNum = this.config.tableNum || 2;
};
BOARDFUL.ui.Board.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
	this.player_list = {};
	for (var i = 0; i < this.config.playerNum; ++ i) {
		$(this.canvas).append('<div class="player' + i + '"></div>');
		this.player_list[i] = new BOARDFUL.ui.Player(this.canvas + ' > .player' + i);
	};
	this.table_list = {};
	for (var i = 0; i < this.config.tableNum; ++ i) {
		$(this.canvas).append('<div class="table' + i + '"></div>');
		this.table_list[i] = new BOARDFUL.ui.Table(this.canvas + ' > .table' + i);
	};
};
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
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
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
	var topleft = this.config.topleft;
	if (undefined !== topleft) {
		$(this.canvas + " .topleft span").html(topleft);
	}
	var topright = this.config.topright;
	if (undefined !== topright) {
		$(this.canvas + " .topright span").html(topright);
	}
	var bottomleft = this.config.bottomleft;
	if (undefined !== bottomleft) {
		$(this.canvas + " .bottomleft span").html(bottomleft);
	}
	var bottomright = this.config.bottomright;
	if (undefined !== bottomright) {
		$(this.canvas + " .bottomright span").html(bottomright);
	}
	if (true === this.config.hoverShowCorner) {
		$(this.canvas).hover(function () {
			$(that.canvas + " .value").addClass("visible");
		}, function () {
			$(that.canvas + " .value").removeClass("visible");
		});
	}
	if (true === this.config.draggable) {
		var interval_id = undefined;
		$(this.canvas).draggable({
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
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Icon = function (canvas, config) {
	$(canvas).addClass("boardful_icon_round");
	$(canvas).load("src/icon.html");
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.List = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_list";
	config.htmlFile = config.htmlFile || "src/board/list.html";
	this.items = [];
	this.init(canvas, config);
};
BOARDFUL.ui.List.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.List.prototype.setTestconfig = function () {
	this.config.height = this.config.height || "30%";
	this.config.width = this.config.width || "50%";
	this.config.image = this.config.image || "resources/b2fv.png";
};
BOARDFUL.ui.List.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
	if (undefined !== this.config.image) {
		$(that.canvas + " > .preview > img").attr("src", this.config.image);
	}
};
BOARDFUL.ui.List.prototype.addItems = function (items) {
	var that = this;
	for (var i in items) {
		var content = 
'<div id="' + this.items.length + '" class="item">' +
	items[i].text +
'</div>';
		$(this.canvas + " > .names").append(content);
		$(this.canvas + " > .names > #" + this.items.length).mouseover(function () {
			var id = parseInt($(this).attr("id"));
			$(that.canvas + " > .preview > img").attr("src", that.items[id].image);
		});
		this.items.push(items[i]);
	}
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.MessageBox = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_messagebox";
	config.htmlFile = config.htmlFile || "src/board/messagebox.html";
	this.init(canvas, config);
};
BOARDFUL.ui.MessageBox.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.MessageBox.prototype.setTestconfig = function () {
	this.config.height = this.config.height || "50%";
	this.config.width = this.config.width || "30%";
};
BOARDFUL.ui.MessageBox.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
};
BOARDFUL.ui.MessageBox.prototype.addMessage = function (message) {
	$(this.canvas).append('<div class="message"></div>');
	$(this.canvas + " .message:last-child").html(message);
	var current = $(this.canvas + " .message:last-child");
	setTimeout(function () {
		current.addClass("close");
	}, 5000);
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Player = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_player";
	config.htmlFile = config.htmlFile || "src/board/player.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Player.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Player.prototype.setTestconfig = function () {
};
BOARDFUL.ui.Player.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
	var deck = new BOARDFUL.ui.Deck(this.canvas + " > .player_deck", {
		height: "100%"
	});
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Reminder = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_reminder";
	config.htmlFile = config.htmlFile || "src/board/reminder.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Reminder.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Reminder.prototype.setTestconfig = function () {
	this.config.text = this.config.text || "test test test!!!";
};
BOARDFUL.ui.Reminder.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
	$(this.canvas + " > span").html(this.config.text);
	setTimeout(function () {
		$(that.canvas).css({
			opacity: 0
		});
	}, 2000);
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Table = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_table";
	config.htmlFile = config.htmlFile || "src/board/table.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Table.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Table.prototype.setTestconfig = function () {
	this.config.droppable = this.config.droppable || true;
};
BOARDFUL.ui.Table.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
	if (true === this.config.droppable) {
		$(".boardful_table").droppable({
			drop: function(event, ui) {
				$(this).html("Dropped!");
			}
		});
	}
};
var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.ValueChange = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_value_change";
	config.htmlFile = config.htmlFile || "src/board/value_change.html";
	this.init(canvas, config);
};
BOARDFUL.ui.ValueChange.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.ValueChange.prototype.setTestconfig = function () {
	this.config.value = this.config.value || "+100000";
	this.config.type = this.config.type || "increase";
};
BOARDFUL.ui.ValueChange.prototype.onLoad = function () {
	this.setTestconfig();
	var that = this;
	if (undefined !== this.config.height) {
		$(this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$(this.canvas).css("width", this.config.width);
	}
	$(this.canvas + " .change").html(this.config.value);
	$(this.canvas).addClass(this.config.type);
	setTimeout(function () {
		$(that.canvas).addClass("vanish");
	}, 2000);
};