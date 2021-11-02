$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        stagePadding: 100,
        // autoplay: true,
        // autoplayTimeout: 1000,
        // autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 100,
            },
            991: {
                items: 3,
                stagePadding: 0
            },
            1200: {
                items: 3,
                stagePadding: 200
            }
        }
    });

    $("main #slider .owl-carousel .custom-slider-item").mouseenter(function() {
        $(this).addClass("hovered");
    });

    $("main #slider .owl-carousel .custom-slider-item").mouseleave(function() {
        $(this).removeClass("hovered");
    });

    $("main #slider .owl-carousel .custom-slider-item .content").hover(function() {
        $(this).parent().addClass("hovered");
    });
});