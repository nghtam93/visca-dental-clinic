$(document).ready(function(){
  // Sticky navbar
    // =========================

    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement,stickyHeight) {
      var stickyTop = stickyWrapper.offset().top;
      if (scrollElement.scrollTop() >= stickyTop ) {
          stickyWrapper.height(stickyHeight);
          sticky.addClass("is-sticky");
      }
      else {
          sticky.removeClass("is-sticky");
          stickyWrapper.height('auto');
      }
    };
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');
        var stickyHeight = sticky.outerHeight();
        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this),stickyHeight);
        });
        stickyToggle(sticky, stickyWrapper, $(window),stickyHeight);
        // Check scroll top
        var winSt_t = 0;
        $(window).scroll(function() {
            var winSt = $(window).scrollTop();
            if (winSt >= winSt_t) {
                sticky.removeClass("top_show")
            } else {
                sticky.addClass("top_show")
            }
            winSt_t = winSt
        });
    });
    
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

    $(".scrollTop2").click(function() {
      $('.nav__mobile').animate({scrollTop: 0},'slow');
    });

    

    // Fix content scroll
    if ($('body').hasClass('home')) {
        var conceptPos = $('.home-concept').offset().top;
        var greetingPos = $('.home-greeting').offset().top - $(window).height();
        var greetingPos02 = $('.home-greeting').offset().top;
        var conceptTtlPos = $('.home-concept__ttl').offset().top;
        var conceptTxtPos = $('.home-concept__txt').offset().top; 



        $(window).scroll(function() { 
            
            var my_width =  $(this).scrollTop() - conceptPos
            var my_width2 =  conceptPos - $(this).scrollTop()
            $(".home-concept--bg").css({"opacity":"1"});
            if(my_width >= 0 && $(this).scrollTop() <= $('.home-greeting').offset().top){
              $(".home-concept--bg").css({"top":0+"px"});
            }else{
                $(".home-concept--bg").css({"top":my_width2+"px"});
            }
        
            if(conceptPos <= $(this).scrollTop() && $(this).scrollTop() <= greetingPos){ 

                $('.home-concept').addClass('is-active'); 
                if(conceptTtlPos <= $(this).scrollTop() && $(this).scrollTop() <= conceptTxtPos){ 
                    $('.home-concept__ttl').addClass('is-on') 
                }else{
                    $('.home-concept__ttl').removeClass('is-on') 
                } 

                if(conceptTxtPos <= $(this).scrollTop() && $(this).scrollTop() <= greetingPos02){
                    $('.home-concept__txt').addClass('is-on') 
                }else{ 
                    $('.home-concept__txt').removeClass('is-on') 
                } 
            }else{
                $('.home-concept').removeClass('is-active'); 
            } 
        }); 
    } 

});


