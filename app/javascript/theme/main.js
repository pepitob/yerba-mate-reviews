(function() {

    'use strict';



    // select2

    if ($('.select2').length) {
        $(".select2").select2({
            width: '100%',
            minimumResultsForSearch: Infinity
        });
    }



    // like icon

    if ($('.btn-wishlist').length) {
        $('.btn-wishlist').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('liked');
            $(this).children('.btn-wishlist').toggleClass('liked');
        });
    }



    // owl location

    if ($('.owl-location-listing').length) {
        $('.owl-location-listing').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: true,
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 6
                }
            }
        });

    }



    // owl slide

    if ($('.owl-testimonial').length) {
        $('.owl-testimonial').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: true,
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

    }



    //  half star

    if ($('#rating-star , #ratingstar1 , #ratingstar2 , #ratingstar3 , #ratingstar4 , #ratingstar5 , #ratingstar6 , #ratingstar7 , #ratingstar8').length) {
        $.fn.raty.defaults.path = '../assets/images';
        // Half Star
        $('#rating-star , #ratingstar1 , #ratingstar2 , #ratingstar3 , #ratingstar4 , #ratingstar5 , #ratingstar6 , #ratingstar7 , #ratingstar8').raty({
            half: true,
        });
    }


    // price ranger

    if ($('#slider-padding').length) {
        var slider = document.getElementById('slider-padding');
        noUiSlider.create(slider, {
            tooltips: [wNumb({
                decimals: 0,
                prefix: '$'
            }), wNumb({
                decimals: 0,
                prefix: '$'
            })],
            start: [20, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });

    }


    // lightgallery

    if ($("#lightgallery").length) {
        $('#lightgallery').lightGallery({
            thumbnail: true
        });
    }


    // editor

    if ($('#editor').length) {
        var quill = new Quill('#editor', {
            theme: 'snow'
        });
    }


    // drag drop

    if ($('#drag-drop-area').length) {
        var uppy = Uppy.Core()
            .use(Uppy.Dashboard, {
                inline: true,
                target: '#drag-drop-area'
            })
            .use(Uppy.Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })

        uppy.on('complete', (result) => {
            console.log('Upload complete! We’ve uploaded these files:', result.successful)
        })
    }


    // date select

    if ($('#dateSelect').length) {
        const picker = new Litepicker({
            element: document.getElementById('dateSelect'),
            singleMode: false,
            allowRepick: true,
        });
    }


    // Magnific popup

    if ($(".popup-youtube").length) {
        $(".popup-youtube").magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true,

        });
    }


    // offcanvas js

    if ($('.offcanvas').length) {
        const offcanvasElementList = document.querySelectorAll('.offcanvas')
        const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
    }


    // side leftnav

    if ($('.side-leftnav a').length) {
        $('.side-leftnav a')
            // Remove links that don't actually link to anything
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 120
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                };
                $('.side-leftnav a').each(function() {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');
            });
    }



     // owl location

     if ($('.owl-slider').length) {
        $('.owl-slider').owlCarousel({
            loop: true,
            margin: 24,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: true,
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });

    }

    if ($('[data-bs-toggle="tooltip"]').length) {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    }

      // Menu toggle for dashboard header

  if ($("#nav-toggle").length) {
    $("#nav-toggle").on("click", function (e) {
      e.preventDefault();
      $("#db-wrapper").toggleClass("toggled");
    });

  }

  // Password field strength

  if ($(".password-field input").length) {
    $('.password-field input').on("keyup", function () {
      var strength = checkPasswordStrength($(this).val());
      var $outputTarget = $(this).parent('.password-field');

      $outputTarget.removeClass(function (index, css) {
        return (css.match(/\level\S+/g) || []).join(' ');
      });
      $outputTarget.addClass('level' + strength);
    });

    function checkPasswordStrength(password) {
      var strength = 0;

      // If password is 6 characters or longer
      if (password.length >= 6) {
        strength += 1;
      }

      // If password contains both lower and uppercase characters, increase strength value.
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
      }

      // If it has numbers and characters, increase strength value.
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
        strength += 1;
      }

      return strength;
    }
  }


})();