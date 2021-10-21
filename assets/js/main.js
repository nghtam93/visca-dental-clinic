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
    $('.menu-mb__btn').click(function(e){
        e.preventDefault()
        if($('.menu-mb__btn').hasClass('active')){

            $('body').removeClass('modal-open')
            $('.menu-mb__btn').removeClass('active')
            $('.nav__mobile').removeClass('active')

        } else {
            $('body').addClass('modal-open')
            $('.menu-mb__btn').addClass('active')
            $('.nav__mobile').addClass('active')
        }
    });


});


