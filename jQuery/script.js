$(document).ready(function () {
    
    //utilizes chaining technique, to execute multiple animate events with the same function call
    function shineLoop() {
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000).animate({backgroundPositionX: '-800px'}, 3000);
    }

    //repeats shineLoop function
    setInterval(shineLoop, 0);

    //shrinks header size when the documnet is scrolled down 50 pixels
    $(document).on("scroll", function() {
        if($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({

        //Triggers images to slide down one after the other 
        //when the mouse enters the div #classicCars
        mouseenter: function() {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //images slide back up when mouse leaves #classicCars
        mouseleave: function() {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //creates a toggle effect for each faq
    $('div.question').on('click', function() {
        $(this).next().slideToggle('slow');
    });
})