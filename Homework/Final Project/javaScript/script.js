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









});//end of code
