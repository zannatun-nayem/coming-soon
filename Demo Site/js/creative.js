/*!
 * Start Bootstrap - Creative v1.1.1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
!(function (a) {
  "use strict";
  a("a.page-scroll").bind("click", function (e) {
    var o = a(this);
    a("html, body")
      .stop()
      .animate(
        { scrollTop: a(o.attr("href")).offset().top - 50 },
        1250,
        "easeInOutExpo"
      ),
      e.preventDefault();
  });
  // a("body").scrollspy({ target: ".navbar-fixed-top", offset: 51 }),
  // a(".navbar-collapse ul li a:not(.dropdown-toggle)").click(function () {
  //   a(".navbar-toggle:visible").click();
  // }),
  // a("#mainNav").affix({ offset: { top: 100 } }),
  // (window.sr = ScrollReveal()),
  // sr.reveal(".sr-icons", { duration: 600, scale: 0.3, distance: "0px" }, 200),
  // sr.reveal(".sr-button", { duration: 1e3, delay: 200 }),
  // sr.reveal(
  //   ".sr-contact",
  //   { duration: 600, scale: 0.3, distance: "0px" },
  //   300
  // );
})(jQuery);
