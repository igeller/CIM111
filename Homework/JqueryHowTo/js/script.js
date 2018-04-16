$(document).ready(function(){

    $("div.hideSquare").hide();
    $("div.showSquare").show ();
    $("div.picSquare").hide();
    $(".TipP").hide();

    var clicks = 0;
    var tipState = true, hideState = false;

    $(".stepSquare").click(function () {

        $(this).find(".hideSquare").toggle();
        $(this).find(".showSquare").hide();
        $(this).find(".picSquare").hide();


        if($(this).css("grid-column") == "1 / 1" || $(this).css("grid-column") == "2 / 2"
        || $(this).css("grid-column") == "3 / 3"){
            $(this).css("grid-column", "1/4");
        }else if($(this).css("grid-column") == "1 / 4"){
            if(tipState == false){
                $(this).find(".hideSquare").show();
                tipState = true;
            }else if(tipState == true){
                $(this).find(".hideSquare").show();
            }
            tipState = false;
        }
        $(this).on('click', function(e) {
            if (e.target !== this){
                return;
            }else if($(this).css("grid-row") == "1 / 1" || $(this).css("grid-row") == "5 / 5"){
                $(this).css("grid-column", "1/1");
            }else if($(this).css("grid-row") == "2 / 2" || $(this).css("grid-row") == "4 / 4"){
                $(this).css("grid-column", "2/2");
            }else if($(this).css("grid-row") == "3 / 3"){
                $(this).css("grid-column", "3/3");
            }
            $(this).find(".hideSquare").hide();
            $(this).find(".showSquare").show();
        });
    });

    $(".tip").click(function(){
        console.log($(this).parent());
        if($(this).parent().find(".TipP").css("display") == "none"){
            $(this).parent().find(".TipP").add().css({
                "font-size":"15px",
                "color": "black",
                "margin":"0 auto",
                "margin-left": "2%",
                "font-style": "italic",
                "display": "inline-block"
            });
        }else if($(this).parent().find(".TipP").css("display") == "inline-block"){
            $(this).parent().find(".TipP").add().css({
                "display": "none"
            });
        }
    });


    $(".stepSquare").mouseenter(function() {
        if($(this).css("grid-column") == "1 / 1" || $(this).css("grid-column") == "2 / 2"
        || $(this).css("grid-column") == "3 / 3"){
            $(this).find(".showSquare").hide();
            $(this).find(".picSquare").show();
            $(this).find(".picSquare, img").add().css({"border-radius": "20px", "display": "block"});
        }else if($(this).css("grid-column") == "1 / 4"){
            $(this).find(".stepSquare, .showSquare").hide();
            $(this).find(".stepSquare, .picSquare").hide();

        }
    });


    $(".stepSquare").mouseleave(function() {
        if($(this).css("grid-column") == "1 / 1" || $(this).css("grid-column") == "2 / 2"
        || $(this).css("grid-column") == "3 / 3"){
            $(this).find(".showSquare").show();
            $(this).find(".picSquare").hide();
        }else if($(this).css("grid-column") == "1 / 4"){
            $(this).find(".stepSquare, .showSquare").hide();
            $(this).find(".stepSquare, .picSquare").hide();
        }
    });

});
