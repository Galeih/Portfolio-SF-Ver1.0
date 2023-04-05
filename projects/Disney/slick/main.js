$('.slidesf').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 900,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 540,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
            }
        }
    ]
});

$(document).ready(function () { 
    $('.ligne').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll:1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4
            }
        },
        {
            breakpoint: 900,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 540,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
    });
});