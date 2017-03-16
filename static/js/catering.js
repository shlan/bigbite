$(document).ready(function(){


    $(".burger-menu").click(function(){
        $(".mobile-nav-bar").slideToggle(500);
    });

    $(".click-here").click(function(e){

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

    $.getJSON("js/catering.json", function(data){

        //6_foot
        for(var i = 0; i < data.foot_6.length; i++){

            var sandwich = data.foot_6[i];
            var id = sandwich.id;
            var description = sandwich.description;
            var image = sandwich.image;
            var price = sandwich.price;
            var title = sandwich.title;
            var serves = sandwich.serves;

            $(".foot_6").append('<div class="sandwich"><img src="images/catering/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p><p>'+serves+'</p></div>');
        }

        //sandwich_wraps_platters
        for(var i = 0; i < data.sandwich_wraps_platters.length; i++){

            var sandwich = data.sandwich_wraps_platters[i];
            var id = sandwich.id;
            var description = sandwich.description;
            var image = sandwich.image;
            var price = sandwich.price;
            var title = sandwich.title;
            var serves = sandwich.serves;

            $(".sandwich_wraps_platters").append('<div class="sandwich"><img src="images/catering/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p><p>'+serves+'</p></div>');
        }

        //lunch_boxes
        for(var i = 0; i < data.lunch_boxes.length; i++){

            var sandwich = data.lunch_boxes[i];
            var id = sandwich.id;
            var description = sandwich.description;
            var image = sandwich.image;
            var price = sandwich.price;
            var title = sandwich.title;
            var serves = sandwich.serves;

            $(".lunch_boxes").append('<div class="sandwich"><img src="images/catering/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p><p>'+serves+'</p></div>');
        }

        //breakfast_platters
        for(var i = 0; i < data.breakfast_platters.length; i++){

            var sandwich = data.breakfast_platters[i];
            var id = sandwich.id;
            var description = sandwich.description;
            var image = sandwich.image;
            var price = sandwich.price;
            var title = sandwich.title;
            var serves = sandwich.serves;

            $(".breakfast_platters").append('<div class="sandwich"><img src="images/catering/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p><p>'+serves+'</p></div>');
        }

        //Party_Platters
        for(var i = 0; i < data.Party_Platters.length; i++){

            var sandwich = data.Party_Platters[i];
            var id = sandwich.id;
            var description = sandwich.description;
            var image = sandwich.image;
            var price = sandwich.price;
            var title = sandwich.title;
            var serves = sandwich.serves;

            $(".Party_Platters").append('<div class="sandwich"><img src="images/catering/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p><p>'+serves+'</p></div>');
        }

        //Beverage_Packages
        for(var i = 0; i < data.Beverage_Packages.length; i++){

            var sandwich = data.Beverage_Packages[i];
            var id = sandwich.id;
            var description = sandwich.description;
            var image = sandwich.image;
            var price = sandwich.price;
            var title = sandwich.title;
            var serves = sandwich.serves;

            $(".Beverage_Packages").append('<div class="sandwich"><img src="images/catering/'+image+'"><h3>'+title+" $"+price+'</h3><p>'+description+'</p><p>'+serves+'</p></div>');
        }

    });

});
