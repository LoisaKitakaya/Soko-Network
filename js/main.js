$(document).ready(function () {
  var toggleMenuBtn = $("#menu-btn-tgl");
  var toggleMenu = $("#menu-tgl");

  toggleMenu.hide();

  // services sub container
  var servicesSubMenu = $("#services-sub-menu");
  var servicesToggle = $("#services");

  servicesSubMenu.hide();

  servicesToggle.click(function () {
    aboutSubMenu.fadeOut();
    servicesSubMenu.slideToggle();
  });

  // about sub container
  var aboutSubMenu = $("#about-sub-menu");
  var aboutToggle = $("#about");

  aboutSubMenu.hide();

  aboutToggle.click(function () {
    servicesSubMenu.fadeOut();
    aboutSubMenu.slideToggle();
  });

  $(".main-body").click(function () {
    servicesSubMenu.hide();
    aboutSubMenu.hide();
  });

  // navbar background
  var navbar = $("#top");
  
  $(window).scroll(function () {
    var scroll = $(document).scrollTop();

    if (scroll > 80) {
      navbar.removeClass("bg");
      navbar.addClass("bg-dark");
    } else {
      navbar.addClass("bg");
      navbar.removeClass("bg-dark");
    }
  });
});
