$(document).ready(function () {
    $('#products-items').slick({
        dots: true,
        dotsClass: 'product-dots',
    });
    $('.slick-next.slick-arrow').text('')
    $('.slick-prev.slick-arrow').text('')


    $('#recipe-items').slick({
        dots: true,
        dotsClass: 'recipe-dots',
        arrows: false,
    });

    $('#arr-next').click(function (e) {
        $('#recipe-items').slick('slickNext');

    });

    $('#arr-prev').click(function (e) {
        $('#recipe-items').slick('slickPrev');

    });

    new WOW().init();

});