$(document).ready(function($) { 
	$('.landing-photo') .css({'min-height': (($(window).height()) + 'px'}); //allows space for the enter section
});
$(window).resize(function() {
	$('.landing-photo') .css({'min-height': (($(window).height())+ 'px'}); //allows space for the enter section
});

$(document).ready(function(){
	//Scrolling animation
	$(".scroll").click(function(event){
		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#" + trgt).offset();
		var target_top = target_offset.top;

		//goto that anchor by setting the body scroll top to anchor top
		$('html, body').animate({scrollTop: target_top}, 400);
	});

});