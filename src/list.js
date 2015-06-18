var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.List = function (canvas, options) {
	$("#" + canvas).addClass("boardful_list");
	$("#" + canvas).load("src/list.html", function () {
		$("#" + canvas + " .item").mouseover(function () {
			console.debug(this)
			var id = $(this).attr("id");
			$("#" + canvas + " #preview img").attr("src", "resources/" + id + ".png");
		});
	});
};