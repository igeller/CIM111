$(document).ready(function(){
    $(window).ready(menu);

    var browserHeight = $(window).height();
    var browserWidth = $(window).width();



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



    var controller = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerHook: .09
        }
    });
















    //moving panels
		// define movement of panels
		var wipeAnimation = new TimelineMax()
			// animate to second panel
			.to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
			.to("#slideContainer", 1,   {x: "-50%"})	// move in to first panel
			.to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: ".pinSlides",
				triggerHook: "onLeave",
				duration: "400%"
			})
			.setPin(".pinSlides")
			.setTween(wipeAnimation)
			.addIndicators({name: "slides"}) // add indicators (requires plugin)
			.addTo(controller);


            //PAGE SWITCH
            var page = document.querySelectorAll("div.fullPage"); //get all PAGES

                //create a scene for every PAGE
                for(var i = 0; i<page.length; i++){
                    new ScrollMagic.Scene({
                        triggerElement: page[i]
                    }).setPin(page[i])
                    .addIndicators({name: "pages"})
                    .addTo(controller);
                }





















});//end of code
