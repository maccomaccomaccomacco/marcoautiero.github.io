$(window).load(function(){
	if(window.outerWidth <= 800 || window.outerHeight <= 600) {
		$('#main-container').fullpage({normalScrollElements:'.scroll', scrollOverflow: true});
		$.fn.fullpage.setAllowScrolling(false);
	} else {
		$('#main-container').fullpage({normalScrollElements:'.scroll', scrollOverflow: false});
		$('#toscroll').slimScroll({
	        height: $("body").innerHeight()+'px'
	    });
	}

});
$(window).resize(function(){
	$.fn.fullpage.destroy('all');
	if(window.outerWidth <= 800 || window.outerHeight <= 600) {		
		$('#main-container').fullpage({normalScrollElements:'.scroll', scrollOverflow: true});
	} else {
		$('#main-container').fullpage({normalScrollElements:'.scroll', scrollOverflow: false});
		$('#toscroll').slimScroll({
        	height: $("body").innerHeight()+'px'
	    });
	}

})


$(document).ready(function(){
	// var myScroll = new IScroll('.scroll', { mouseWheel: true, scrollbars: true });
	$('#toscroll').slimScroll({
        height: $("body").innerHeight()+'px'
    });
});