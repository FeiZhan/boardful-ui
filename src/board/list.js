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