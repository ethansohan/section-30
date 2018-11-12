$(document).ready(function($){
	"use strict";

// Staff-active
$('.homepage-slides').owlCarousel({
    loop: true,
    nav: false,
    margin:20,
    dots: true,
    responsive:{
        0:{
            items:2,
            margin:50
        },
        768:{
            items:3
        },
        992:{
            items:5
        },
        1200:{
            items:1
        }
    }
});


	
}(jQuery));