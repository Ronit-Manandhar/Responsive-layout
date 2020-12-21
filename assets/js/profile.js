$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },


        700: {
            items: 2
        },

        1024: {
            items: 3
        },

        1366: {
            items: 3
        }
    }
});



var $gallery = $('.gallery').isotope({


});

$('.filtering').on('click', 'span', function() {
    var filterValue = $(this).attr('data-filter');
    $gallery.isotope({ filter: filterValue });
});

$('.filtering').on('click', 'span', function() {
    $(this).addClass('active').siblings().removeClass('active')
});