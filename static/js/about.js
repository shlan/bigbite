$(document).ready(function(){

	$(".burger-menu").click(function(){
		$(".mobile-nav-bar").slideToggle(500);
	});

	$(".down-arrow").click(function(e){

		e.preventDefault();

    	$('html, body').animate({
        	scrollTop: $(".scroll-to").offset().top
    	}, 2000);
		
	});

});

