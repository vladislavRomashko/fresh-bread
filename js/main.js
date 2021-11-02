$(document).ready(function () {
    $('#products-items').slick({
        dots: true,
        dotsClass: 'slick-dots'
    });
$('.slick-next.slick-arrow').text('')
$('.slick-prev.slick-arrow').text('')


    $('#recipe-items').slick({
        dots: true,
        dotsClass: 'slick-dots'
    });
});