import Swiper from 'swiper';

$(document).ready(function () {
  var mySwiper3 = new Swiper ('.fence-about__slider', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.fence-about__slider-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.fence-about__slider-next',
      prevEl: '.fence-about__slider-prev',
    },
  });
}); 