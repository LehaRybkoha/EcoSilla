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

	$('.open-terrace').click(function () {
		if ($(window).width() <= '990'){
			$('.works-popup-terrace--sm').show();
	    } else {
	        $('.works-popup-terrace--sm').hide();
	        $('.popup-overlay').show();
	        $('.works-popup-terrace--lg').show();
	    }
	})
	$('.close-terrace').click(function () {
		$('.works-popup-terrace').hide();
		$('.popup-overlay').hide();
	})
	
	$('.open-facade').click(function () {
		$('.popup-overlay').show();
		$('.works-popup-facade').show();
	})
	$('.close-facade').click(function () {
		$('.works-popup-facade').hide();
		$('.popup-overlay').hide();
	})

	$('.open-fence').click(function () {
		if ($(window).width() <= '990'){
			$('.works-popup-fence--sm').show();
	    } else {
	        $('.works-popup-fence--sm').hide();
	        $('.popup-overlay').show();
	        $('.works-popup-fence--lg').show();
	    }
	})
	$('.close-fence').click(function () {
		$('.works-popup-fence').hide();
		$('.popup-overlay').hide();
	})
});
