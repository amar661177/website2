
$(document).ready(function(){

    /* ================== Navbar ================== */

    $(".toggle-navbar").click(function(){
        $(".navbar-mobile").animate({left:"0px"});
        $(".background-effect-navbar").fadeIn(200);
    });

    $(".navbar-mobile .close").click(function(){
        $(".navbar-mobile").animate({left:"-20em"});
        $(".background-effect-navbar").fadeOut(200);

    });

    // Scrolling Navbar Eeffect

    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".navbar").css({backgroundColor:"rgba(33, 36, 40 , 0.9)"});   
        }
        else{
            $(".navbar").css({backgroundColor:"rgba(33, 36, 40,1)"});
        }

    })

    /* ================== Typing ================== */

    var typed = new Typed('.typingText', {
        strings:[
            "Developer",
            "Desginer",
           
        
        ],
        typeSpeed:70,
        backSpeed:50,
        loop: true,
        loopCount: Infinity,
        bindInputFocusEvents: true,
      });


    /* ================== Progress Bar ================== */


   $(window).on("scroll", function(){
    if($(window).scrollTop() + $(window).height() - 500 >= $(".my-resume").offset().top){

        
        var barList = $.map($('.bar'), function(el) {
            return {name: $(el).data('name'), value: $(el).data('value')}
       });
       for (let i = 0; i < barList.length; i++) {
        $(".bar[data-name="+barList[i].name+"]").animate({
            width:barList[i].value+"%"
        } ,1000);
           
       }
    }
  })




});



