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
	       navbar: {
                title: " "
            },
	    });
	}
);

AOS.init();