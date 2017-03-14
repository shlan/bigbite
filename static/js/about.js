$(document).ready(function(){

	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
 		$(".mobile-header").show();
 		$(".mobile-nav-bar").hide();
	}

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

