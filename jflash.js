//Params:
//message -> the message that should be passed
//flash -> the flash that you want (notice, error)
//author Victor Pereira <victor.pereira@bigrails.com>
(function (jQuery) {
    var jflash_timer = 0;
    $.fn.jflash = function(params){
        var flash_div = jQuery(this);
        params = $.extend( {
            message: "Action successfully executed",
            flash: "notice",
            fadein:600,
            display:1400,
            fadeout:600
        }, params);
	    
        var div_name = "flash_" + params.flash
        flash_div.html("<div id="+ div_name + ">" + params.message  + "</div>");
        flash_div.show();
        flash_div.fadeIn(params.fadein);
        // use Javascript timeout function to delay calling
        clearTimeout(jflash_timer);
        jflash_timer = setTimeout(function(){
            flash_div.fadeOut(params.fadeout);
        }, params.display);
        return this;
    };
})(jQuery);
