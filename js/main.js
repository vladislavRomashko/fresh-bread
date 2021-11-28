$(document).ready(function () {

    $('.recipe-image img, .recipe-text').click(function (e) {
        let id = $(e.target).data('id');
        $('#' + id).show();
        $('.recipe-popup-container-close, .recipe-popup').click((e) => {
            if (e.target.classList.contains('krestik') || e.target.classList.contains('recipe-popup')) {
                $('#' + id).hide();
            }
        })
    });

    $('.product-item-details span, .product-item-details img ').click(function (e) {
        let prodId = $(e.target).data('id');
        $('#' + prodId).show();
        $('.product-popup-container-close, .products-card ').click((e) => {
            if (e.target.classList.contains('krestik') || e.target.classList.contains('products-card')) {
                $('#' + prodId).hide();
            }

        })
    });

    $('#header-burger img').click(() => {
        let menu = $('#burger-menu')
        menu.show();
        $('#burger-menu-close img').click(() => {
            menu.hide();
        });
    });

    $('#cart img').click(() => {
        let shopCart = $('.shopping-cart')
        shopCart.show();
        $('.shopping-cart-popup-container-close img, .shopping-cart').click((e) => {
            if (e.target.classList.contains('krestik') || e.target.classList.contains('shopping-cart')) {
                shopCart.hide()
            }
        })
    })

    $('#shopping-cart-action-btn').click(() => {
        let shopCart = $('.shopping-cart');
        shopCart.hide();
        let form = $('#forma');
        form.show();
        $('.forma-popup-container-close img, #forma').click((e) => {
            if (e.target.classList.contains('krestik') || e.target.classList.contains('forma-area')) {
                form.hide();
            }
            ;
        });

        $('#back-to-cart img, #back-to-cart span').click(() => {
            form.hide();
            shopCart.show();
        });
    });

    $('#follow-items-form-button > button').click(() => {
        let email = $('#email');
        let err = $('#email-error');
        let border = $('#follow-items-form-input')

        if (!email.val()) {
            err.show();
            border.css('border-color', 'red');
        } else {
            err.hide();
            border.css('border-color', 'rgb(149, 81, 14)');
        }
    });

    $('#purchases-action > button').click(() => {
        let name = $('#name');
        let secondName = $('#second-name');
        let phone = $('#phone');
        let form = $('#forma');
        let formCong = $('#form-cong')
        let errName = $('#form-err-name')
        let errSecName = $('#form-err-sec-name')
        let errPhone = $('#form-err-phone')
        let input = $('input[type=text]')



        if (name.val() && secondName.val() && phone.val()) {
            form.hide();
            formCong.show();
        }

        if(!name.val()) {
            errName.show();
            name.css('border-color', 'red');
        } else {
            errName.hide();
            name.css('border-color', '#95510e');
        }

        if(!secondName.val()) {
            errSecName.show();
            secondName.css('border-color', 'red');
        } else {
            errSecName.hide();
            secondName.css('border-color', '#95510e');
        }

        if(!phone.val()) {
            errPhone.show();
            phone.css('border-color', 'red');
        } else {
            errPhone.hide();
            phone.css('border-color', '#95510e');
        }

    });

    $('.form-cong-container-close img, #form-cong').click((e) => {
        let formCong = $('#form-cong')
        if (e.target.classList.contains('krestik') || e.target.classList.contains('form-cong')) {
            formCong.hide();
        }
    });

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