//Params:
//message -> the message that should be passed
//fadeIN -> ms for fadein effect
//FadeOut -> ms for fadeout effect
//timeout -> time that we will show our flash message
//flash -> the flash that you want (notice, error)
//author Victor Pereira <victor.pereira@bigrails.com>
(function (jQuery) {
	$.fn.jflash = function(params){
	    var flash_div = jQuery(this);
		params = $.extend( {message: "Action successfully executed", flash: "notice", fadein:600, fadout:600, timeout:1400}, params); 
	    
		var div_name = "flash_" + params.flash
		flash_div.append("<div id="+ div_name + ">" + params.message  + "</div>");
		flash_div.show();
	    flash_div.fadeIn(params.fadein);
	    // use Javascript timeout function to delay calling
	
	    setTimeout(function(){
			flash_div.fadeOut(params.fadeout,function(){
				flash_div.html("");
	    		flash_div.hide()
			})
		},params.timeout);
		return this;
	};
})(jQuery);