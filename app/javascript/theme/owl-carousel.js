import '/home/hippo/code/pepitob/yerba-mate-reviews/node_modules/jquery/dist/jquery.min.js'
import '/home/hippo/code/pepitob/yerba-mate-reviews/node_modules/owl.carousel/dist/owl.carousel.min.js'

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
});
