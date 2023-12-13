$(function() {
    $('.c-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        responsive:[
            {
                breakpoint: 850,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    });
    $('#dev-arr-right').on('click', function() {
        $('.c-slider').slick('slickNext');
    });
    $('#dev-arr-left').on('click', function() {
        $('.c-slider').slick('slickPrev');
    });
})

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});