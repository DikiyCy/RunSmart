$(document).ready(function(){
    $('.carousel__inner').slick({
        // infinite: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/s4_carousel/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/s4_carousel/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
    })
});
