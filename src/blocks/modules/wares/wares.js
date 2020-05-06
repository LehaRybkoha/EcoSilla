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
  var mySwiper5 = new Swiper ('.wares-content__slider-picture', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.wares-content__slide-picture-next',
      prevEl: '.wares-content__slide-picture-prev',
    },
  });
  $('#floor').show();
  $('#facade, #fence, #complect').hide();
  $('.wares-content__buttons-radio').click(function () {
    if($(this).val() == 'floorProd') {
      $('#floor').show();
      $('#facade, #fence, #complect').hide();
    } else if($(this).val() == 'facadeProd') {
        $('#facade').show();
        $('#floor, #fence, #complect').hide();
    } else if($(this).val() == 'fenceProd') {
        $('#fence').show();
        $('#floor, #facade, #complect').hide();
    } else if($(this).val() == 'complectProd') {
        $('#complect').show();
        $('#floor, #facade, #fence').hide();
    }
  });
}); 