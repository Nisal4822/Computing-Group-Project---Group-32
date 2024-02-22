document.addEventListener("DOMContentLoaded", function() {
  var mainSlider = new Swiper(".main-slider .swiper-container", {
      loop: true,
      autoplay: {
          delay: 3000,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

  var cardSlider = new Swiper(".card-slider .swiper-container", {
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

  var secondarySlider = new Swiper(".secondary-slider .swiper-container", {
      loop: true,
      autoplay: {
          delay: 3000,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      direction: 'rtl'
  });
});
