var BOARDFUL = BOARDFUL || {};
BOARDFUL.ui = BOARDFUL.ui || {};

BOARDFUL.ui.Table = function (canvas, options) {
	var that = this;
	this.canvas = canvas;
	this.options = options || {};
	$("#" + this.canvas).addClass("boardful_table");
	$("#" + this.canvas).load("src/table.html", function () {
		that.init();
	});
};
BOARDFUL.ui.Table.prototype.init = function () {
    $( ".boardful_table" ).droppable({
      drop: function( event, ui ) {
        $( this )
            .html( "Dropped!" );
      }
    });
};