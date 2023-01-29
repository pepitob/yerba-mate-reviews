// sticky menu

(function(){

  'user strict'

$(window).on('scroll', function () {
  var window_top = $(window).scrollTop() + 0;
  if (window_top > 0) {
      $('.nav-header-classic, .fixed_menu ').addClass('menu-fixed animate__animated animate__fadeInDown');
  } else {
      $('.nav-header-classic, .fixed_menu').removeClass('menu-fixed animate__animated animate__fadeInDown');
  }
});

})();
