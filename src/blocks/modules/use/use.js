import Swiper from 'swiper';

$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container--sm', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination--sm',
      clickable: true,
    },
  });
  var mySwiper2 = new Swiper ('.swiper-container--lg', {
    pagination: {
      el: '.swiper-pagination--lg',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next--lg',
      prevEl: '.swiper-button-prev--lg',
    },
    speed: 400,
    loop: true,
    slidesPerView: 1,
    direction: 'vertical',
  });
});