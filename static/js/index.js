$(document).ready(function(){

	$(".burger-menu").click(function(){
		$(".mobile-nav-bar").slideToggle(500);
	});

	$(".down-arrow").click(function(e){

		var nav_bar_height = 0;

		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        	nav_bar_height =  $(".mobile-header").height();
    	}else{
    		nav_bar_height =  $(".nav-bar").height();
    	}

		e.preventDefault();

    	$('html, body').animate({
        	scrollTop: $(".scroll-to").offset().top - nav_bar_height - 20
    	}, 1000);
		
	});

	
	$(window).on('scroll', function() {

		var divPosition = $(".scroll-to").offset().top - $(".nav-bar").height() - 20;

		var highlightPosition = $(".highlight").offset().top;

		var scrollPosition = window.scrollY;

    	if(scrollPosition >= divPosition){

        	$('.nav-bar').addClass('nav-bar-background');

    	}else{

    		$('.nav-bar').removeClass('nav-bar-background');
    	}

    	if(scrollPosition + $('.nav-bar').height() > highlightPosition && scrollPosition < highlightPosition + $(".highlight").height()){
    		$('.nav-bar').addClass('nav-bar-background');
    	}


	});


	
});

