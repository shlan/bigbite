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


	$.getJSON("js/menu.json", function(data){

		//menu_sandwich_cold
		$(".sandwiches").append('<h1>Cold Sandwiches</h1>');
        for(var i = 0; i < data.menu_sandwich_cold.length; i++){

        	var sandwich = data.menu_sandwich_cold[i];
        	var id = sandwich.id;
        	var description = sandwich.description;
        	var image = sandwich.image;
        	var price = sandwich.price;
        	var title = sandwich.title;

        	$(".sandwiches").append('<div class="sandwich"><img src="images/menu/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p></div>');
        }


        //menu_sandwich_hot

        $(".sandwiches").append('<h1>Hot Sandwiches</h1>');

        for(var i = 0; i < data.menu_sandwich_hot.length; i++){

        	var sandwich = data.menu_sandwich_hot[i];
        	var id = sandwich.id;
        	var description = sandwich.description;
        	var image = sandwich.image;
        	var price = sandwich.price;
        	var title = sandwich.title;

        	$(".sandwiches").append('<div class="sandwich"><img src="images/menu/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p></div>');
        }

        // breakfast
        for(var i = 0; i < data.breakfast.length; i++){

        	var sandwich = data.breakfast[i];
        	var id = sandwich.id;
        	var description = sandwich.description;
        	var image = sandwich.image;
        	var price = sandwich.price;
        	var title = sandwich.title;

        	$(".breakfast").append('<div class="sandwich"><img src="images/menu/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p></div>');
        }

        // soup and salad
        for(var i = 0; i < data.soup_and_salad.length; i++){

        	var sandwich = data.soup_and_salad[i];
        	var id = sandwich.id;
        	var description = sandwich.description;
        	var image = sandwich.image;
        	var price = sandwich.price;
        	var title = sandwich.title;

        	$(".soup_and_salad").append('<div class="sandwich"><img src="images/menu/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p></div>');
        }

        // extras
        for(var i = 0; i < data.sides_and_extras.length; i++){

        	var sandwich = data.sides_and_extras[i];
        	var id = sandwich.id;
        	var description = sandwich.description;
        	//var image = sandwich.image;
        	var price = sandwich.price;
        	var title = sandwich.title;

        	$(".sides_and_extras").append('<div class="sandwich"><img src="images/menu/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p></div>');
        }


    });

});

