import Swiper from 'swiper';
$(document).ready(function () {
var mySwiper10 = new Swiper ('.works-content__slider', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.works-content__slider-pagination',
      clickable: true,
    },
  });

	$('.works-content__item-wrapper').mouseenter(function () {
		$(this).find('.works-content__item-button-wrapper').show();
		$(this).find('.works-content__slide-pic, .works-content__item-pic').css('filter', 'none');
	})
	$('.works-content__item-wrapper').mouseleave(function () {
		$(this).find('.works-content__item-button-wrapper').hide();
		$(this).find('.works-content__slide-pic, .works-content__item-pic').css('filter', 'grayscale(100%)');
	})
});
