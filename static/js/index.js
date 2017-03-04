$(document).ready(function(){

	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
 		$(".mobile-header").show();
 		$(".mobile-nav-bar").hide();
	}

	$(".burger-menu").click(function(){
		$(".mobile-nav-bar").slideToggle("slow");
	});

	$(".down-arrow").click(function(e){

		e.preventDefault();

    	$('html, body').animate({
        	scrollTop: $(".scroll-to").offset().top
    	}, 2000);
		
	});

	/*
	$(window).on('scroll', function() {
		var divPosition = $(".scroll-to").offset().top;
		var scrollPosition = window.scrollY;
    	if(scrollPosition >= divPosition){
        	$('.nav-bar').addClass('nav-bar-background');
    	}else{
    		$('.nav-bar').removeClass('nav-bar-background');
    	}
	});
	*/
});

