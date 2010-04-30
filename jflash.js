//Params:
//message -> the message that should be passed
//flash -> the flash that you want (notice, error)
//author Victor Pereira <victor.pereira@bigrails.com>
(function (jQuery) {
	$.fn.jflash = function(params){
	    var flash_div = jQuery(this);
		params = $.extend( {message: "Action successfully executed", flash: "notice"}, params); 
	    
		var div_name = "flash_" + params.flash
		flash_div.append("<div id="+ div_name + ">" + params.message  + "</div>");
		flash_div.show();
	    flash_div.fadeIn(600);
	    // use Javascript timeout function to delay calling
	
	    setTimeout(function(){
			flash_div.fadeOut(500,function(){
				flash_div.html("");
	    		flash_div.hide()})},1400);
		return this;
	};
})(jQuery);