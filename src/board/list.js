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
		$("#" + this.canvas).css("height", this.config.height);
	}
	if (undefined !== this.config.width) {
		$("#" + this.canvas).css("width", this.config.width);
	}
	if (undefined !== this.config.image) {
		$("#" + that.canvas + " > .preview > img").attr("src", this.config.image);
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