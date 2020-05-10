import AOS from 'aos';
import mmenu from 'mmenu-js';
import $ from 'jquery';
window.jQuery = $;

document.addEventListener(
	"DOMContentLoaded", () => {
	    new Mmenu( "#mmenu", {
	    	"extensions": [
              "theme-dark"
           ],
	       pageSelector: "#wrapper",
           onClick: {
           	  close: true,
           },
	       navbar: {
                title: " ",
                sticky: false,
           },
	    });
	}
);

AOS.init();


$(document).ready(function () {
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
// $( window ).resize(function() {
//   if ($(window).width() <= '990'){
//         $('section, header').removeAttr('data-aos');
//     } else {
//         $('section').attr('data-aos', 'fade-up');
//     }
// });

// // вызовем событие resize
// $(window).resize();
});