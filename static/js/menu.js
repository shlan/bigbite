$(document).ready(function(){

	$(".mobile-nav-bar").hide();

	$(".burger-menu").click(function(){
		$(".mobile-nav-bar").slideToggle("slow");
	});

	

	$.getJSON("js/menu.json", function(data){

		//menu_sandwich_cold
		$(".sandwiches").append('<h1>Cold sandwiches</h1>');
        for(var i = 0; i < data.menu_sandwich_cold.length; i++){

        	var sandwich = data.menu_sandwich_cold[i];
        	var id = sandwich.id;
        	var description = sandwich.description;
        	var image = sandwich.image;
        	var price = sandwich.price;
        	var title = sandwich.title;

        	$(".sandwiches").append('<div class="sandwich col-sm-4"><img src="images/menu/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p></div>');
        }


        //menu_sandwich_hot
        $(".sandwiches").append('<h1>Hot sandwiches</h1>');

        for(var i = 0; i < data.menu_sandwich_hot.length; i++){

        	var sandwich = data.menu_sandwich_hot[i];
        	var id = sandwich.id;
        	var description = sandwich.description;
        	var image = sandwich.image;
        	var price = sandwich.price;
        	var title = sandwich.title;

        	$(".sandwiches").append('<div class="sandwich col-sm-4"><img src="images/menu/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p></div>');
        }


    });

});

