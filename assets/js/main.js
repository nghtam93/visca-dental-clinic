$(document).ready(function(){
    var wow = new WOW(
        {
          boxClass:     'wow',
          animateClass: 'animated',
          offset:       0,
          mobile:       true,
          live:         true
        }
      );
      wow.init();
    //-------------------------------------------------
    // Menu
    //-------------------------------------------------
    $('.nav__mobile--close').click(function(e){
        $('.nav__mobile').removeClass('active')
        $('body').removeClass('modal-open')
    });
    $('.menu-mb__btn').click(function(e){
        e.preventDefault()
        $('body').addClass('modal-open')
        // $('.menu-mb__btn').addClass('active')
        $('.nav__mobile').addClass('active')
    });

    var back_to_top=$(".scrollTop"),offset=220,duration=500;$(window).scroll(function(){$(this).scrollTop()>offset?back_to_top.addClass("active"):back_to_top.removeClass("active")}),$(document).on("click",".scrollTop",function(o){return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1});

});


