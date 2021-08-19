


$(document).ready(function() {
  
  "use strict";

  new WOW().init();

// Back To Top
  $(window).scroll(function() {
    let scrollToTop = $(this).scrollTop();
    
    if(scrollToTop > 300) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
      
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0,
    });
  });


  $('.navbar .mobile-menu .show-menu').on('click', function() {
    $('.navbar .nav-content .list .menu').addClass('active');
    $('.body-overlay').fadeIn();
  });

  $('.navbar .nav-content .list .menu > i, .body-overlay').on('click', function() {
    $('.navbar .nav-content .list .menu').removeClass('active');
    $('.body-overlay').fadeOut();
  });

  $('.navbar .mobile-menu .show-search').on('click', function() {
    $('.search-area').toggleClass('d-none');
  });

$('.contact-form .project .checkbox label').on('click', function() {
  if($(this).children('input').is(':checked')) {
    $(this).addClass('active');
  } else {
    $(this).removeClass('active');
  }
})

  
});
      