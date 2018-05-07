$(document).ready(function(){

    $(window).ready(menu);
    $("#projects").scrollTo($("#myProjects"));


    var browserHeight = $(window).height();
    var browserWidth = $(window).width();

    $(".fullPage").height(browserHeight);

    $(window).resize(menu);



    var controller = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerHook: .09
        }
    });


    $("#projects").ready(function () {
        $("#projects").scrollTo($("#myProjects"));
    });


    //menu click
    navScroll(".hmlink", "#home");     navScroll(".edlink", "#education");
    navScroll(".exlink", "#experience");    navScroll(".sklink", "#skills");
    navScroll(".pjlink", "#projects");


    //menu moushovers
    navHover(".hmlink");    navHover(".edlink");    navHover(".exlink");
    navHover(".sklink");    navHover(".pjlink");


/*LETTERING STUFF*/
$(function () {
    $("#greeting").textillate({
        in:{effect: 'swing'},
        out:{effect: 'swing'},
        loop: true,
        minDisplayTime: 1000,
        type: "char"
    });
});




    //if($("#projects").scroll().scrollWidth() < ($("#projects").scroll().scrollWidth())/3)
    $('body').on('scroll', function(event) { mouseHandle(event); });







    //
    // var scrollWidth = $("#projects").scrollLeft();
    // console.log(scrollWidth);
    // var currentPos = $("#projects").scroll().offsetWidth;
    // if(currentPos < scrollWidth/3){
    //     $("#projects").scrollTo("#webdesignProjects");
    // }else if (currentPos > (scrollWidth/3) *2) {
    //     $("#projects").scrollTo("#compSciProjects");
    // }else {
    //     console.log("hey");
    //     $("#projects").scrollTo("#myProjects");
    // }





    //moving panels
    // define movement of panels
    var wipeAnimation = new TimelineMax()
    // animate to second panel
    .to("#slideContainer", 0.5, {z: 0})
    .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
    .to("#slideContainer", 1,   {x: "-50%"})	// move in to first panel
    .to("#slideContainer", 0.5, {z: 0});			// move back to origin in 3D space

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
    var forScene;
    //create a scene for every PAGE
    for(var i = 0; i<page.length; i++){
        forScene = new ScrollMagic.Scene({
                    triggerElement: page[i],
                    reverse: true,
                }).setPin(page[i])
                .addIndicators({name: "pages"})
                .addTo(controller);

    }//end for loop

    //updates the size and makes width responsive
    $(window).resize(function () {
        $(".fullPage").width($(window).width());
        $(".fullPage").height($(window).height());
        $("#projects").scrollTo($("#myProjects"));
        controller.updateScene(forScene);
        controller.update(true);
    });


    //webdesign  projects clickables
    $(".thumbnail").hover(function(){
        $( this ).toggleClass( "active" )
    });

    $("#hw1").click(function() {
        window.location = "https://igeller.github.io/CIM111/Homework/Resume/index.html";
    });
    $("#hw2").click(function() {
        window.location = "https://igeller.github.io/CIM111/Homework/CSS%20Resume/index.html";
    });
    $("#hw3").click(function() {
        window.location = "https://igeller.github.io/CIM111/Homework/Responsive2/home.html";
    });
    $("#hw4").click(function() {
        window.location = "https://igeller.github.io/CIM111/Homework/JqueryHowTo/index.html";
    });
    $("#hw5").click(function() {
        window.location = "https://igeller.github.io/CIM111/Homework/JqueryPlugin/index.html";
    });





/***********************---FUNCTIONS---**************************/
function menu() {
    $(".mobileNav").hide();
    if($(window).width() <= 860 && $(".mobileNav").css("display", "hide")){
        $(".desktopNav").hide();
        $("#navButton").mouseover(function () {
            $(".mobileNav").show();
            $(".mobileNav").mouseleave(function functionName() {
                $(".mobileNav").hide();
            });
            // $(".mobileNav").toggle();
        });

    }else {
        $(".desktopNav").show();
    }
}//end responsiveMenu

/*************Navigation Hover and Click****************/
function navScroll(navItem, location){
    $(navItem).click(function (){
        controller.scrollTo(location)
    });
}//end nav scroll

function navHover(item){
    $(item).mouseover(function () {
        $(item).css("background-color", "grey" );
    });
    $(item).mouseleave(function () {
        $(item).css("background-color", "white" );
    });
}//end nav Hover


});//end of code
