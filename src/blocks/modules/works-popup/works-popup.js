import Swiper from 'swiper';
$(document).ready(function () {
	var mySwiper11 = new Swiper ('.works-popup-terrace__slider-container', {
	    speed: 400,
	    loop: true,
	    slidesPerView: 2,
	    direction: 'vertical',
	    navigation: {
	      nextEl: '.works-popup-terrace__slider-next',
	      prevEl: '.works-popup-terrace__slider-prev',
	    },
	});
	var mySwiper12 = new Swiper ('.works-popup-terrace-lg-slider', {
	    navigation: {
	      nextEl: '.works-popup-terrace-lg-slider-next',
	      prevEl: '.works-popup-terrace-lg-slider-prev',
	    },
	    pagination: {
	      el: '.works-popup-terrace-lg-slider-pagination',
	      clickable: true,
	    },
	});
	var mySwiper12 = new Swiper ('.works-popup-terrace__slider-container2', {
	    speed: 400,
	    loop: true,
	    slidesPerView: 2,
	    direction: 'vertical',
	    navigation: {
	      nextEl: '.works-popup-terrace-lg-slider-next2',
	      prevEl: '.works-popup-terrace-lg-slider-prev2',
	    },
	});
	var mySwiper13 = new Swiper ('.works-popup-facade-container', {
	    navigation: {
	      nextEl: '.works-popup-facade-lg-slider-next',
	      prevEl: '.works-popup-facade-lg-slider-prev',
	    },
	    pagination: {
	      el: '.works-popup-facade-lg-slider-pagination',
	      clickable: true,
	    },
	});

	var mySwiper14 = new Swiper ('.works-popup-facade-small-container', {
	    speed: 400,
	    loop: true,
	    slidesPerView: 1,
	    navigation: {
	      nextEl: '.works-popup-facade-small-next1',
	      prevEl: '.works-popup-facade-small-prev1',
	    },
	    breakpoints: {
	    992: {
	      slidesPerView: 3
	    },
	  }
	});
	var mySwiper14 = new Swiper ('.works-popup-facade-small-container2', {
	    speed: 400,
	    loop: true,
	    slidesPerView: 1,
	    navigation: {
	      nextEl: '.works-popup-facade-small-next2',
	      prevEl: '.works-popup-facade-small-prev2',
	    },
	    breakpoints: {
	    992: {
	      slidesPerView: 3
	    },
	  }
	});
	var mySwiper14 = new Swiper ('.works-popup-facade-small-container3', {
	    speed: 400,
	    loop: true,
	    slidesPerView: 1,
	    navigation: {
	      nextEl: '.works-popup-facade-small-next3',
	      prevEl: '.works-popup-facade-small-prev3',
	    },
	    breakpoints: {
	    992: {
	      slidesPerView: 3
	    },
	  }
	});
});