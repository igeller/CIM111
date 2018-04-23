$(document).ready(function(){
    $(window).ready(menu);

    var browserHeight = $(window).height();
    var browserWidth = $(window).width();


    console.log($(window).resize());

    $(".fullPage").height(browserHeight);


    $(window).resize(menu);

    function menu() {
        $(".mobileNav").hide();
        if($(window).width() <= 860 && $(".mobileNav").css("display", "hide")){
            $(".desktopNav").hide();
            $("#navButton").click(function () {
                $(".mobileNav").toggle();
            });
        }else {
            $(".desktopNav").show();
        }
    }//end responsiveMenu


    //swipe panels for the first page
    var controller = new ScrollMagic.Controller();
    var swipe = new TimelineMax()
        .fromTo("section.panel#p2", 1, {x:"100%"}, {x:"-25%", ease: Linear.easeNone});

    var navHeight = $("#navButton").height();
    new ScrollMagic.Scene({
        triggerElement: "#home",
        triggerHook:"onLeave",
        duration: "1000%",
        offset: -navHeight
    }).setPin("#home")
      .setTween(swipe)
      .addIndicators({name: "panel slides"})
      .addTo(controller);



     var scene2 =  new ScrollMagic.Scene({
          triggerElement: "#p2",
          duration:"100%"
      }).setPin("#aboutH1")
        .addIndicators({name: "h1 tag"})
        .addTo(controller);

      //scroll between first and second PAGE













});//end of code
