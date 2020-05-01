import Swiper from 'swiper';

$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container--sm', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
  });
  var mySwiper2 = new Swiper ('.swiper-container--lg', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    direction: 'vertical',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});