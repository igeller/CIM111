$(document).ready(function(){
    var infoWidth = $("#title").width();

    //fullpage stuff
    $("#fullPage").fullpage({
        sectionsColor: ['pink', 'coral', 'pink', 'coral', 'pink'],
        anchors:['one', 'two', 'three', 'four', 'five'],
        navigationTooltips: ['Home', 'Sydney', 'Cairns', 'Alice Springs', 'Kangaroo Island'],
        menu: "#menu",
        navigation: true,
        
        slidesNavigation: true,
        scrollOverflow: true
    });

    //resize boxes with text to be same height as pictures they are on top of or next to
    var id;
    $("#title").height($(".fp-tableCell").height());// does not work with height
    //$("#title").height($("#stuff img").height());
    $("#sydContent").height($(".fp-slides").height());
    $(window).resize(function() {
        clearTimeout(id);
        id = setTimeout(doneTO, 1);
    });

    function doneTO(){
        console.log($(".fp-tableCell").height());
        $("#title").height($(".fp-tableCell").height());
        //$("#title").height($("#stuff img").height());
        $("#sydContent").height($(".fp-slides").height());
    }

    // var imgHeight = $("#stuff img").height();
    // imgHeight = imgHeight * (-1);
    // $("#title").css("margin-top","imgHeight");
    // console.log(imgHeight);



    //scroll magic stuff
    //changed background color of the sydney pictures - no pinning
        // $(function(){
        //     var controller = new ScrollMagic.Controller();
        // });
        // var blockTween = new TweenMax.to('#syd .fp-tableCell', 5,{
        //     backgroundColor: 'black'
        // });
        //
        // var containerScene = new ScrollMagic.Scene({
        //     triggerElement: '#sydney'
        // }).setTween(blockTween).addIndicators().addTo(controller);


    // pinning







    $.fn.fullpage.setAllowScrolling(true, 'all');




});
