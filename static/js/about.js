$(document).ready(function(){

    $(".mobile-header").hide();
	$(".mobile-nav-bar").hide();

	$(".burger-menu").click(function(){
		$(".mobile-nav-bar").slideToggle("slow");
	});

});

