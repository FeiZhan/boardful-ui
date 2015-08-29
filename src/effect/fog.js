var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Fog = function (canvas, config) {
	config = config || {};
	config.className = config.className || "boardful_fog";
	config.htmlFile = config.htmlFile || "src/effect/fog.html";
	this.init(canvas, config);
};
BOARDFUL.ui.Fog.prototype = new BOARDFUL.ui.Object;
BOARDFUL.ui.Fog.prototype.setTestconfig = function () {
};
BOARDFUL.ui.Fog.prototype.onLoad = function () {
	this.setTestconfig();
};
BOARDFUL.ui.Fog.prototype.enable = function () {
	$(this.selector).addClass("visible");
};
BOARDFUL.ui.Fog.prototype.disable = function () {
	$(this.selector).removeClass("visible");
};