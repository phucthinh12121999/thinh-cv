// AOS
AOS.init({
  duration: 1200,
  once: true,
  disable: "mobile",
});
jQuery(document).ready(function ($) {
  $(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(350).css({
      overflow: "visible",
    });
  });
  // Smooth scroll for the menu and links with .scrollto classes
  $(".smothscroll").on("click", function (e) {
    e.preventDefault();
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 62,
          },
          1500,
          "easeInOutExpo"
        );
      }
    }
  });

  $(".carousel").carousel({
    interval: 3500,
  });
});
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
