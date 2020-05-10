import Swiper from 'swiper';

$(document).ready(function () {
  var mySwiper4 = new Swiper ('.wares-content__slider', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.wares-content__slider-pagination',
      clickable: true,
    },
  });
  var mySwiper5 = new Swiper ('.wares-content__slider-picture--sm1', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-picture-next--sm1',
      prevEl: '.wares-content__slide-picture-prev--sm1',
    },
  });


  var mySwiper6 = new Swiper ('.wares-content__slider-picture--floor1', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-flooring1-next',
      prevEl: '.wares-content__slide-flooring1-prev',
    },
  });
  var mySwiper6 = new Swiper ('.wares-content__slider-picture--floor2', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-flooring2-next',
      prevEl: '.wares-content__slide-flooring2-prev',
    },
  });
  var mySwiper6 = new Swiper ('.wares-content__slider-picture--floor3', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-flooring3-next',
      prevEl: '.wares-content__slide-flooring3-prev',
    },
  });
  var mySwiper6 = new Swiper ('.wares-content__slider-picture--floor4', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-flooring4-next',
      prevEl: '.wares-content__slide-flooring4-prev',
    },
  });

  var mySwiper6 = new Swiper ('.wares-content__slider-picture--floor5', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-flooring5-next',
      prevEl: '.wares-content__slide-flooring5-prev',
    },
  });
  var mySwiper6 = new Swiper ('.wares-content__slider-picture--floor6', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-flooring6-next',
      prevEl: '.wares-content__slide-flooring6-prev',
    },
  });
  var mySwiper6 = new Swiper ('.wares-content__slider-picture--floor7', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-flooring7-next',
      prevEl: '.wares-content__slide-flooring7-prev',
    },
  });
  var mySwiper6 = new Swiper ('.wares-content__slider-picture--floor8', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-flooring8-next',
      prevEl: '.wares-content__slide-flooring8-prev',
    },
  });


  var mySwiper7 = new Swiper ('.wares-content__slider-picture--facade', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-picture-next',
      prevEl: '.wares-content__slide-picture-prev',
    },
  });
  var mySwiper8 = new Swiper ('.wares-content__slider-picture--fence', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-picture-next',
      prevEl: '.wares-content__slide-picture-prev',
    },
  });
  var mySwiper9 = new Swiper ('.wares-content__slider-picture--complect', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-picture-next',
      prevEl: '.wares-content__slide-picture-prev',
    },
  });
  var mySwiper15 = new Swiper ('.wares-content__slider-facade', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.wares-content__slider-pagination-facade',
      clickable: true,
    },
  });
  var mySwiper16 = new Swiper ('.wares-content__slider-fence', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.wares-content__slider-pagination-fence',
      clickable: true,
    },
  });
  $('#floor, #floor--lg').show();
  $('#facade, #fence, #complect, #floor--lg, #fence--lg, #complect--lg').hide();
  $('.wares-content__buttons-radio').click(function () {
    if($(this).val() == 'floorProd') {
      $('#floor, #floor--lg').show();
      $('#facade, #fence, #complect, #facade--lg, #fence--lg, #complect--lg').hide();
    } else if($(this).val() == 'facadeProd') {
        $('#facade, #facade--lg').show();
        $('#floor, #fence, #complect, #floor--lg, #fence--lg, #complect--lg').hide();
    } else if($(this).val() == 'fenceProd') {
        $('#fence, #fence--lg').show();
        $('#floor, #facade, #complect, #floor--lg, #facade--lg, #complect--lg').hide();
    } else if($(this).val() == 'complectProd') {
        $('#complect, #complect--lg').show();
        $('#floor, #facade, #fence, #floor--lg, #facade--lg, #fence--lg').hide();
    }
  });
  $('.wares-open-btn').click(function () {
      $('.wares-content-products__list--hidden').toggle();
      $(this).text('Скрыть');
  });
}); 