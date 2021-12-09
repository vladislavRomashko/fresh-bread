$(document).ready(function () {

    // ------------ Slick slider ----------------

    $('#products-items').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        dotsClass: 'product-dots',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: true,
                    dotsClass: 'product-dots',
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    dotsClass: 'product-dots',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    dotsClass: 'product-dots',
                }
            },
            {
                breakpoint: 531,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    dotsClass: 'product-dots',
                }
            },

        ]
    });

    $('.slick-next.slick-arrow').text('');
    $('.slick-prev.slick-arrow').text('');


    $('#recipe-items').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        dotsClass: 'recipe-dots',

        responsive: [
            {
                breakpoint: 882,
                settings: {
                    width: 400,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    dotsClass: 'recipe-dots',
                }
            },
        ]
    });

    $('#arr-next').click(function (e) {
        $('#recipe-items').slick('slickNext');

    });

    $('#arr-prev').click(function (e) {
        $('#recipe-items').slick('slickPrev');

    });

    new WOW().init();

    $('#header-phone span, #footer-contacts-phone, #footer-contacts-action > button, #burger-menu-call ').click(() => {
        let phone = $('#phone-call');
        let callErr = $('#call-error');


        $('#call').show();

        $('.call-container-close, .call').click((e) => {
            if (e.target.classList.contains('krestik') || e.target.classList.contains('call')) {
                $('#call').hide();
            }
        })

        $('#call-container-action > button').click(() => {
            let callContainer = $('#call-container')

            if (!phone.val()) {
                callErr.show();
                phone.css('border-color', 'red');
            } else {

                callContainer.html('<div id="call-container-close">\n' +
                    '            <img src="images/close.png" alt="" class="krestik">\n' +
                    '        </div>' +
                    '<div class="call-thanks"><p>Спасибо, что выбрали нас!</p> <p>Наш оператор свяжется с вами.</p></div>');

            }
        })


    })


    // ------------ Recipe popup show/hide -----------

    $('.recipe-image img, .recipe-text').click(function (e) {
        let id = $(e.target).data('id');
        $('#' + id).show();
        $('.recipe-popup-container-close, .recipe-popup').click((e) => {
            if (e.target.classList.contains('krestik') || e.target.classList.contains('recipe-popup')) {
                $('#' + id).hide();
            }
        })
    });

    // --------------- Product items show/hide -------------

    $('.product-item-details span, .product-item-details img ').click(function (e) {
        let prodId = $(e.target).data('id');
        $('#' + prodId).show();
        $('.product-popup-container-close, .products-card ').click((e) => {
            if (e.target.classList.contains('krestik') || e.target.classList.contains('products-card')) {
                $('#' + prodId).hide();
            }

        })
    });

    // --------------- Burger menu adaptive show/hide -------------

    $('#header-burger img').click(() => {
        let menu = $('#burger-menu')
        menu.show();
        $('#burger-menu-close img').click(() => {
            menu.hide();
        });
    });


    // ---------------- From ShopCart to form and back -------------

    let form = $('#forma');

    $('#shopping-cart-action-btn').click(() => {
        shopCart.hide();
        form.show();
        $('.forma-popup-container-close img, #forma').click((e) => {
            if (e.target.classList.contains('krestik') || e.target.classList.contains('forma-area')) {
                form.hide();
            }
        });

        $('#back-to-cart img, #back-to-cart span').click(() => {
            form.hide();
            shopCart.show();
        });
    });

    // -------------- Email validation -------------

    let email = $('#email');
    let err = $('#email-error');
    let border = $('#follow-items-form-input')

    $('#follow-items-form-button > button').click(() => {

        if (!email.val()) {
            err.show();
            border.css('border-color', 'red');
        } else {
            $('#follow-items-title').text('Круто! Теперь вы будете в курсе самых последних новостей!');
            $('#follow-items-form').hide();
            err.hide();
            border.css('border-color', 'rgb(149, 81, 14)');
        }
    });


    $('.form-cong-container-close img, #form-cong').click((e) => {
        if (e.target.classList.contains('krestik') || e.target.classList.contains('form-cong')) {
            formCong.hide();
        }
    });

// --------------- Read more ------------

    let blocks = $('.hide-block');

    $("#read-more").on("click", function () {

        let txt = $(blocks).is(':visible') ? 'Читать больше' : 'Свернуть';
        $("#read-more span").text(txt);

        if (txt === 'Свернуть') {

            $("#read-more img").css('transform', 'rotate(180deg)');

        }

        if (txt === 'Читать больше') {
            $("#read-more img").css('transform', 'none');
        }
        ;

        $(this).nextAll(blocks).slideToggle(200);
    });

    $(window).resize(function () {

        $(blocks).css('display', 'none');

        $("#read-more span").text('Читать больше');

        $('.slick-next.slick-arrow').text('');
        $('.slick-prev.slick-arrow').text('');
    });

    // --------- Shopcart ---------

    let shopCart = $('.shopping-cart')

    $('#cart').click(() => {
        shopCart.show();

        $('.shopping-cart-popup-container-close img, .shopping-cart').click((e) => {
            if (e.target.classList.contains('krestik') || e.target.classList.contains('shopping-cart')) {
                shopCart.hide();
            }
        });


        let cartArray = JSON.parse(localStorage.getItem('cart'));

        let cartItems = document.getElementById('shopping-cart-item-cover');


        if (localStorage.length === 0) {
            $('#empty').show();

        } else {
            $('#empty').hide();

        }

        sumCart();

        cartItems.innerHTML = '';

        for (let i = 0; i < cartArray.length; i++) {

            let cartContainer = document.createElement('div');
            cartContainer.className = 'shopping-cart-item';

            let cartImage = document.createElement('div');
            cartImage.className = 'shopping-cart-item-images';

            let cartImg = document.createElement('img');
            cartImg.src = cartArray[i].productImage;


            cartImage.append(cartImg);

            let cartDescript = document.createElement('div');
            cartDescript.className = 'shopping-cart-item-description';

            let cartTitle = document.createElement('div');
            cartTitle.className = 'shopping-cart-item-description-title';
            cartTitle.innerHTML = cartArray[i].productTitle;

            let cartWeight = document.createElement('div');
            cartWeight.className = 'shopping-cart-item-description-weight'
            cartWeight.innerHTML = cartArray[i].productWight

            cartDescript.append(cartTitle, cartWeight)

            let actionBlock = document.createElement('div');
            actionBlock.className = 'action-block';

            let quantity = document.createElement('div');
            quantity.className = 'quantity';

            let buttonMinus = document.createElement('button');
            buttonMinus.className = 'minus-btn';
            buttonMinus.innerHTML = '-';
            buttonMinus.type = 'button';

            let input = document.createElement('input');
            input.type = 'text';
            input.value = cartArray[i].productCount;

            let buttonPlus = document.createElement('button');
            buttonPlus.className = 'plus-btn';
            buttonPlus.innerHTML = '+';
            buttonPlus.type = 'button';

            quantity.append(buttonMinus, input, buttonPlus);

            let itemPrice = document.createElement('div');
            itemPrice.className = 'shopping-cart-item-price';
            itemPrice.innerHTML = cartArray[i].productPrice + ' руб';

            let itemAction = document.createElement('div');
            itemAction.className = 'shopping-cart-item-action';

            let itemActionImg = document.createElement('img');
            itemActionImg.src = '../images/trash.png';

            let spanDelete = document.createElement('span');
            spanDelete.innerHTML = 'Удалить';

            itemAction.append(itemActionImg, spanDelete);

            actionBlock.append(quantity, itemPrice, itemAction);

            cartContainer.append(cartImage, cartDescript, actionBlock);

            cartItems.append(cartContainer);
        }

    });

    let totalSum = $('.purchases-total-num');

    function sumCart() {

        let cost = $('#cart-count-price');
        let count = $('#cart-count-item');

        let Array = JSON.parse(localStorage.getItem('cart'));

        sumCost = 0;
        sumProd = 0;

        for (let i = 0; i < Array.length; i++) {
            sumCost += Array[i].productSum;
            sumProd += Array[i].productCount;
        }

        cost.text(sumCost + ' руб');
        count.text(sumProd + ' шт')

        if (Array.length === 0) {
            cost.css('display', 'none');
            count.css('display', 'none');
        } else {
            cost.css('display', 'block');
            count.css('display', 'block');
        }

        cartSum.text(sumProd + ' шт');
        cartSumCost.text(sumCost + ' руб');
    }

    function totalSumItems() {


        if (number === 0) {
            totalSum.text(sumCost + ' руб.');
        } else if (number === 1) {
            totalSum.text(sumCost + 250 + ' руб.');
        } else if (number === 1 && sumCost >= 500) {
            delMoney.text('0 руб.');
            totalSum.text(sumCost + ' руб.');
        }
    }

    // ----------- Delivery ------------

    let deliveryRadio = $('#method2');
    let notDelivery = $('#method1');
    let deliveryPrice = $('.purchases-delivery');
    let delMoney = $('.purchases-delivery-num');

    deliveryPrice.hide();

    deliveryRadio.click(() => {
        deliveryPrice.show();

        number = 1;

        if (number === 1 && sumCost >= 500) {
            delMoney.text('0 руб.');
            totalSum.text(sumCost + ' руб.');

        } else if (number === 1) {
            totalSum.text(sumCost + 250 + ' руб.');
        }

    });

    notDelivery.click(() => {
        deliveryPrice.hide();

        number = 0;

        if (number === 0) {
            totalSum.text(sumCost + ' руб.');
        }
    });

    // ----------------------------------

    // ----------------- Added products to cart ------------------

    let cartSum = $('.purchases-items-num');
    let cartSumCost = $('.purchases-sum-num');
    let number = 0
    let sumProd = 0;
    let sumCost = 0;

    $('.product-btn ').click(function (event) {

//  -----------  Animation add to shopCart -------

            let that = $(this).closest('.product-item').contents('.product-item-image').find('img');
            let bascket = $("#cart");
            let w = that.width();

            that.clone()
                .css({
                    'width': w,
                    'position': 'absolute',
                    'z-index': '9999',
                    top: that.offset().top,
                    left: that.offset().left
                })
                .appendTo("body")
                .animate({
                    opacity: 0.05,
                    left: bascket.offset()['left'],
                    top: bascket.offset()['top'],
                    width: 20
                }, 1000, function () {
                    $(this).remove();
                });

// -------------------------------------------------

            let prPrice = $(event.target).siblings('.product-item-price').contents('span').text().trim();

            let product = {
                productImage: $(event.target).siblings('.product-item-image ').contents('img').attr('src'),
                productTitle: $(event.target).siblings('.product-item-title').text().trim(),
                productCount: 0,
                productPrice: prPrice,
                productSum: Number(prPrice),
                productId: $(event.target).attr('data-id'),
                productWight: $(event.target).siblings('.product-item-weight').text().trim(),
            };


            let cart = localStorage.getItem('cart');
            let itemId = $(event.target).attr('data-id');


            if (cart) {
                let cartArray = JSON.parse(cart);

                let cartPosition = false

                for (let i = 0; i < cartArray.length; i++) {
                    if (cartArray[i].productId === itemId) {

                        cartArray[i].productCount += 1;
                        cartArray[i].productSum = cartArray[i].productPrice * cartArray[i].productCount;
                        cartPosition = true;
                        break;

                    }

                }
                if (cartPosition === false) {
                    cartArray.push(product);
                    for (let i = 0; i < cartArray.length; i++) {
                        if (cartArray[i].productId === itemId) {
                            cartArray[i].productCount += 1;
                            break;
                        }
                    }
                }

                localStorage.setItem('cart', JSON.stringify(cartArray));

            } else {
                let cartArray = []
                cartArray.push(product);
                for (let i = 0; i < cartArray.length; i++) {
                    if (cartArray[i].productId === itemId) {
                        cartArray[i].productCount += 1;
                        break;
                    }
                }

                localStorage.setItem('cart', JSON.stringify(cartArray));
            }


            sumCart();
            totalSumItems();

            // ------- Проверка клика на поле доставки ---------

            deliveryRadio.click(() => {
                deliveryPrice.show();

                number = 1;

                if (number === 1 && sumCost >= 500) {
                    delMoney.text('0 руб.')
                    totalSum.text(sumCost + ' руб.');

                } else if (number === 1) {

                    totalSum.text(sumCost + 250 + ' руб.');
                }

            });

            notDelivery.click(() => {
                deliveryPrice.hide();

                number = 0


                if (number === 0) {

                    totalSum.text(sumCost + ' руб.');
                }
            });

        }
    )
    ;

    $('.in-cart-btn').click(function (event) {

        let prPrice = $(event.target).closest('.product-card-info-actions-btn').siblings('.product-card-info-actions-price').contents('span').text().trim();

        let product = {
            productImage: $(event.target).closest('.product-card-info').siblings('.product-card-image').contents('img').attr('src'),
            productTitle: $(event.target).closest('.product-card-info-actions').siblings('.product-card-info-title').contents('.title-card').text().trim(),
            productCount: 0,
            productPrice: prPrice,
            productSum: Number(prPrice),
            productId: $(event.target).attr('data-id'),
            productWight: $(event.target).closest('.product-card-info-actions').siblings('.product-card-info-title').contents('.weight-card').text().trim(),
        };


        let cart = localStorage.getItem('cart');
        let itemId = $(event.target).attr('data-id');


        if (cart) {
            let cartArray = JSON.parse(cart);

            let cartPosition = false;

            for (let i = 0; i < cartArray.length; i++) {
                if (cartArray[i].productId === itemId) {

                    cartArray[i].productCount += 1;
                    cartArray[i].productSum = cartArray[i].productPrice * cartArray[i].productCount;
                    cartPosition = true;
                    break;
                }

            }
            if (cartPosition === false) {
                cartArray.push(product);
                for (let i = 0; i < cartArray.length; i++) {
                    if (cartArray[i].productId === itemId) {
                        cartArray[i].productCount += 1;
                        break;
                    }
                }
            }

            localStorage.setItem('cart', JSON.stringify(cartArray));

        } else {
            let cartArray = []
            cartArray.push(product);
            for (let i = 0; i < cartArray.length; i++) {
                if (cartArray[i].productId === itemId) {
                    cartArray[i].productCount += 1;
                    break;
                }
            }

            localStorage.setItem('cart', JSON.stringify(cartArray));
        }



        sumCart();
        totalSumItems();

        // ------- Проверка клика на поле доставки ---------

        deliveryRadio.click(() => {
            deliveryPrice.show();

            number = 1;

            if (number === 1 && sumCost >= 500) {
                delMoney.text('0 руб.')
                totalSum.text(sumCost + ' руб.');

            } else if (number === 1) {

                totalSum.text(sumCost + 250 + ' руб.');
            }

        });

        notDelivery.click(() => {
            deliveryPrice.hide();

            number = 0;

            if (number === 0) {

                totalSum.text(sumCost + ' руб.');
            }
        });


    });
    // ----------------- * End Click * ----------------------

    sumCart();

    // --------------- Form validation ---------------

    let name = $('#name');
    let name2 = $('#second-name');
    let phone = $('#phone');
    let formCong = $('#form-cong');
    let errName = $('#form-err-name');
    let errName2 = $('#form-err-sec-name');
    let errPhone = $('#form-err-phone');
    let input = $('input[type=text]');
    let localCartStorage = JSON.parse(localStorage.getItem('cart'));
    let comments = $('#comments');
    let delMeth1 = $('#method1');
    let delMeth2 = $('#method2');
    let card = $('#card');
    let cash = $('#cash');

    $('#purchases-action > button').click(() => {

        if (name.val() && name2.val() && phone.val()) {
            form.hide();
            formCong.show();

            // $.ajax({
            //     type: 'post',
            //     url: 'mail.php',
            //     data: 'name=' + name.val() + '&name2=' + name2.val() + '&phone=' + phone.val() + '&localCartStorage=' + localCartStorage + '&comments=' + comments.val() + '&delMeth1=' + delMeth1.val().prop('checked') + '&delMeth2=' + delMeth2.val().prop('checked') + '&card=' + card.val().prop('checked') + '&cash=' + cash.val().prop('checked') + '&cartSum' + cartSum.val(),
            //     success: () => {
            //         form.hide();
            //         formCong.show();
            //     },
            //     error: () => {
            //         form.hide();
            //         alert('Ошибка заказа. Свяжитесь пожалуйста по номеру телефона.')
            //     }
            // })
        }

        if (!name.val()) {
            errName.show();
            name.css('border-color', 'red');
        } else {
            errName.hide();
            name.css('border-color', '#95510e');
        }

        if (!name2.val()) {
            errName2.show();
            name2.css('border-color', 'red');
        } else {
            errName2.hide();
            name2.css('border-color', '#95510e');
        }

        if (!phone.val()) {
            errPhone.show();
            phone.css('border-color', 'red');
        } else {
            errPhone.hide();
            phone.css('border-color', '#95510e');
        }

    });

// ---------- Added sum and count to cart and form

    cartSum.text(sumProd + ' шт');
    cartSumCost.text(sumCost + ' руб');

// ---------- Total sum -----------

    totalSumItems();


})
;