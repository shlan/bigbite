$(document).ready(function(){

	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
 		$(".mobile-header").show();
 		$(".mobile-nav-bar").hide();
	}

	$(".burger-menu").click(function(){
		$(".mobile-nav-bar").slideToggle("slow");
	});

});

