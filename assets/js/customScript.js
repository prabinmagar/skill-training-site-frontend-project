(function($) {
    $(window).on("load",function(){
    });


    $(document).ready(function () {

        //owl carousel for placement partner
        var owl = $('.placement-partner');
        owl.owlCarousel({
            margin: 24,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout:5000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })

        //end here owl carousel for placement partner

        //Voice comment carousel start
        var owl = $('#voiceComment');
        owl.owlCarousel({
            margin: 24,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout:5000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        })
        //Ended Voice comment carousel

        $('#courses-slider').owlCarousel({
            margin: 24,
            nav: true,
            loop: true,
            autoplay: false,
            autoplayTimeout:5000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1400: {
                    items: 5
                }
            },
            navText: ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"]
        })

        $('.courses-info-slider').owlCarousel({
            margin: 24,
            nav: true,
            loop: true,
            autoplay: false,
            autoplayTimeout:5000,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1400: {
                    items: 4
                }
            },
            navText: ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"]
        });

        // init Isotope
        var $grid = $('.courses-info-grid').isotope({
            // options
        });
        // filter items on button click
        $('.filter-button-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

           // isotope filter buttons scripts
        const coursesBtns = $('.courses-info-btn-group button');
        const resetActiveBtns = () => {
            jQuery.each(coursesBtns, function(i, item){
                $(item).removeClass('courses-info-btn-grp-active');
            })
        }

        // setting the active isotope filtering button
        jQuery.each(coursesBtns, function(i, item){
            $(item).bind('click', function(event){
                if($(event.target).is('button')){
                    resetActiveBtns();
                    $(item).addClass('courses-info-btn-grp-active');
                }
            })
        });
        })
})(jQuery);
