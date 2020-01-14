(function ($) {
    "use strict"

    jQuery(document).ready(function ($) {


        // This is For Hamburger Menu
        $(".menu-trgger").on("click", function () {
            $(".hamburger-menu , navigation.nav-fixed , header").addClass('active');
        });
        $(".menu-off , .hamburger-item").on("click", function () {
            $(".hamburger-menu").removeClass('active');
        });

        // Hero carousel
        $('.homepage-slide-wrap').owlCarousel({
            items: 1,
            autoplay: false,
            nav: true,
            dots: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplaySpeed: 1000,
            animateOut: 'fadeOut',
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

        // portfolio carousel
        $('.portfolio-carousel').owlCarousel({
            autoplay: false,
            nav: true,
            dots: true,
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplaySpeed: 1000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2,
                    margin: 10,
                    nav: false
                },
                600: {
                    items: 3,
                    margin: 10,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true
                }
            }
        });

        var htmlBody = $('html, body');
        var windo = $(window);
        // this is for back to top and sticky menu js
        var bc2top = $('.back-to-top');
        bc2top.on('click', function () {
            htmlBody.animate({
                scrollTop: 0
            }, 1500);
        });
        windo.on('scroll', function () {
            var scrollPos = windo.scrollTop();
            var scrolling = $(this).scrollTop();
            if (scrollPos > 150) {
                bc2top.fadeIn(1500);
            } else {
                bc2top.fadeOut(1500);
            }
            if (scrolling >= 80) {
                $('.navigation').addClass('nav-fixed');
            } else {
                $('.navigation').removeClass('nav-fixed');
            }
        });

    });

    jQuery(window).load(function () {



    });


})(jQuery);