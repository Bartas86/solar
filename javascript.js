$(document).ready(function() {
    console.log("Dupa");
    $(".sun").click(function() {
        $('.sun-text').fadeIn(700).css("display", "block");
        $(".hide2").text("Słońce");
        $(".sun").mouseleave(function() {
            $('.sun-text, .hide2').animate({
                opacity: 'hide', // animate slideUp
                margin: 'hide',
                padding: 'hide',
                height: 'hide' // animate fadeOut
            }, 'fast', 'linear', function() {});
    
        });

    });
    $(".merkury").click(function() {
        $('.merkury-text').fadeIn(700).css("display", "block");
        $(".title").text("");
        $(".merkury").mouseleave(function() {
            $('.merkury-text').animate({
                opacity: 'hide', // animate slideUp
                margin: 'hide',
                padding: 'hide',
                height: 'hide' // animate fadeOut
            }, 'fast', 'linear', function() {});
        });
    });
      $(".wenus").click(function() {
        $('.wenus-text').fadeIn(700).css("display", "block");
        $(".title").text("");
        $(".wenus").mouseleave(function() {
            $('.wenus-text').animate({
                opacity: 'hide', // animate slideUp
                margin: 'hide',
                padding: 'hide',
                height: 'hide' // animate fadeOut
            }, 'fast', 'linear', function() {});
        });
    });
      $(".ziemia").click(function() {
        $('.ziemia-text').fadeIn(700).css("display", "block");
        $(".title").text("");
        $(".ziemia").mouseleave(function() {
            $('.ziemia-text').animate({
                opacity: 'hide', // animate slideUp
                margin: 'hide',
                padding: 'hide',
                height: 'hide' // animate fadeOut
            }, 'fast', 'linear', function() {});
        });
    });
      $(".mars").click(function() {
        $('.mars-text').fadeIn(700).css("display", "block");
        $(".hide2").text("Mars");
        $(".mars").mouseleave(function() {
            $('.mars-text, .hide2').animate({
                opacity: 'hide', // animate slideUp
                margin: 'hide',
                padding: 'hide',
                height: 'hide' // animate fadeOut
            }, 'fast', 'linear', function() {});
    
        });

    });
      $(".jowisz").click(function() {
        $('.jowisz-text').fadeIn(700).css("display", "block");
        $(".hide2").text("jowisz");
        $(".jowisz").mouseleave(function() {
            $('.jowisz-text, .hide2').animate({
                opacity: 'hide', // animate slideUp
                margin: 'hide',
                padding: 'hide',
                height: 'hide' // animate fadeOut
            }, 'fast', 'linear', function() {});
    
        });

    });
      $(".saturn").click(function() {
        $('.saturn-text').fadeIn(700).css("display", "block");
        $(".hide2").text("saturn");
        $(".saturn").mouseleave(function() {
            $('.saturn-text, .hide2').animate({
                opacity: 'hide', // animate slideUp
                margin: 'hide',
                padding: 'hide',
                height: 'hide' // animate fadeOut
            }, 'fast', 'linear', function() {});
    
        });

    });
      $(".uran").click(function() {
        $('.uran-text').fadeIn(700).css("display", "block");
        $(".hide2").text("uran");
        $(".uran").mouseleave(function() {
            $('.uran-text, .hide2').animate({
                opacity: 'hide', // animate slideUp
                margin: 'hide',
                padding: 'hide',
                height: 'hide' // animate fadeOut
            }, 'fast', 'linear', function() {});
    
        });

    });
      $(".neptun").click(function() {
        $('.neptun-text').fadeIn(700).css("display", "block");
        $(".hide2").text("neptun");
        $(".neptun").mouseleave(function() {
            $('.neptun-text, .hide2').animate({
                opacity: 'hide', // animate slideUp
                margin: 'hide',
                padding: 'hide',
                height: 'hide' // animate fadeOut
            }, 'fast', 'linear', function() {});
    
        });

    });
      $(".pluton").click(function() {
        $('.pluton-text').fadeIn(700).css("display", "block");
        $(".hide2").text("pluton");
        $(".pluton").mouseleave(function() {
            $('.pluton-text, .hide2').animate({
                opacity: 'hide', // animate slideUp
                margin: 'hide',
                padding: 'hide',
                height: 'hide' // animate fadeOut
            }, 'fast', 'linear', function() {});
    
        });

    });
      $(".ceres").click(function() {
        $('.ceres-text').fadeIn(700).css("display", "block");
        $(".hide2").text("ceres");
        $(".ceres").mouseleave(function() {
            $('.ceres-text, .hide2').animate({
                opacity: 'hide', // animate slideUp
                margin: 'hide',
                padding: 'hide',
                height: 'hide' // animate fadeOut
            }, 'fast', 'linear', function() {});
    
        });

    });
      $(".eris").click(function() {
        $('.eris-text').fadeIn(700).css("display", "block");
        $(".hide2").text("eris");
        $(".eris").mouseleave(function() {
            $('.eris-text, .hide2').animate({
                opacity: 'hide', // animate slideUp
                margin: 'hide',
                padding: 'hide',
                height: 'hide' // animate fadeOut
            }, 'fast', 'linear', function() {});
    
        });

    });
});