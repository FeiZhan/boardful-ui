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