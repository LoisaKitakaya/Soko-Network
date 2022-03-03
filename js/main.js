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
    contactsSubMenu.fadeOut();
    servicesSubMenu.slideToggle();
  });

  // about sub container
  var aboutSubMenu = $("#about-sub-menu");
  var aboutToggle = $("#about");

  aboutSubMenu.hide();

  aboutToggle.click(function () {
    servicesSubMenu.fadeOut();
    contactsSubMenu.fadeOut();
    aboutSubMenu.slideToggle();
  });

  // about sub container
  var contactsSubMenu = $("#contacts-sub-menu");
  var contactsToggle = $("#contacts");

  contactsSubMenu.hide();

  contactsToggle.click(function () {
    aboutSubMenu.fadeOut();
    servicesSubMenu.fadeOut();
    contactsSubMenu.slideToggle();
  });

  $(".main-body").click(function () {
    servicesSubMenu.hide();
    aboutSubMenu.hide();
    contactsSubMenu.hide();
  });
});
