$(document).ready(function () {

    // ------------ Slick slider ----------------

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
            err.hide();
            border.css('border-color', 'rgb(149, 81, 14)');
        }
    });

    // --------------- Form validation ---------------

    let name = $('#name');
    let secondName = $('#second-name');
    let phone = $('#phone');
    let formCong = $('#form-cong')
    let errName = $('#form-err-name')
    let errSecName = $('#form-err-sec-name')
    let errPhone = $('#form-err-phone')
    let input = $('input[type=text]')


    $('#purchases-action > button').click(() => {

        if (name.val() && secondName.val() && phone.val()) {
            form.hide();
            formCong.show();
        }

        if (!name.val()) {
            errName.show();
            name.css('border-color', 'red');
        } else {
            errName.hide();
            name.css('border-color', '#95510e');
        }

        if (!secondName.val()) {
            errSecName.show();
            secondName.css('border-color', 'red');
        } else {
            errSecName.hide();
            secondName.css('border-color', '#95510e');
        }

        if (!phone.val()) {
            errPhone.show();
            phone.css('border-color', 'red');
        } else {
            errPhone.hide();
            phone.css('border-color', '#95510e');
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
    });

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


        if (localStorage.length === 0 ) {
            $('#empty').show();

        } else {
            $('#empty').hide();

        }

        sumMoney();

        sumPieces();

        cartItems.innerHTML = '';

        for (let i = 0; i < cartArray.length; i++) {

            let cartContainer = document.createElement('div');
            cartContainer.className = 'shopping-cart-item';

            let cartImage = document.createElement('div');
            cartImage.className = 'shopping-cart-item-images';

            let cartImg = document.createElement('img');
            cartImg.src = cartArray[i].productImage;
            console.log(cartImg.src)

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

    function sumMoney() {

        let cost = $('#cart-count-price')

        let Array = JSON.parse(localStorage.getItem('cart'));

        sumCost = 0
        for (let i = 0; i < Array.length; i++) {
            sumCost += Array[i].productSum
        }
        console.log(Array)
        cost.text(sumCost + ' руб')

        if (Array.length === 0) {
            cost.css('display', 'none')
        } else {
            cost.css('display', 'block')
        }

        cartSum.text(sumProd + ' шт');

        cartSumCost.text(sumCost + ' руб');
    }

    function sumPieces() {

        let count = $('#cart-count-item');

        let Array = JSON.parse(localStorage.getItem('cart'));

        sumProd = 0
        for (let i = 0; i < Array.length; i++) {
            sumProd += Array[i].productCount
        }

        count.text(sumProd + ' шт')

        // --------- shopCart Sum counter ------------

        if (Array.length === 0) {
            count.css('display', 'none')
        } else {
            count.css('display', 'block')
        }
    }

    function totalSumItems() {


        if (number === 0) {
            totalSum.text(sumCost + ' руб.');
        } else if (number === 1) {
            totalSum.text(sumCost + 250 + ' руб.');
        } else if (number === 1 && sumCost >= 500) {
            delMoney.text('0 руб.')
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

    // ----------------------------------

    // ----------------- Added products to cart ------------------

    let cartSum = $('.purchases-items-num');
    let cartSumCost = $('.purchases-sum-num');
    let number = 0
    let sumProd = 0;
    let sumCost = 0;

    $('.product-btn ').click(function (event) {

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

                        cartArray[i].productCount += 1
                        cartArray[i].productSum = cartArray[i].productPrice * cartArray[i].productCount
                        cartPosition = true

                    }

                }
                if (cartPosition === false) {
                    cartArray.push(product);
                    for (let i = 0; i < cartArray.length; i++) {
                        if (cartArray[i].productId === itemId) {
                            cartArray[i].productCount += 1

                        }
                    }
                }

                localStorage.setItem('cart', JSON.stringify(cartArray));

            } else {
                let cartArray = []
                cartArray.push(product);
                for (let i = 0; i < cartArray.length; i++) {
                    if (cartArray[i].productId === itemId) {
                        cartArray[i].productCount += 1

                    }
                }

                localStorage.setItem('cart', JSON.stringify(cartArray));
            }
            ;
            console.log(localStorage)

            sumMoney();

            sumPieces();

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

                console.log(number)

                if (number === 0) {

                    totalSum.text(sumCost + ' руб.');
                }
            });

        }
    )
    ;


    $('.in-cart-btn').click(function (event) {

        let prPrice = $(event.target).siblings('.product-item-price').contents('span').text().trim();

        let product = {
            productImage: $(event.target).find('.product-card-image').contents('img').attr('src'),
            productTitle: $(event.target).closest('.product-card-info-actions').siblings('.product-card-info-title').text().trim(),
            productCount: 0,
            productPrice: prPrice,
            productSum: Number(prPrice),
            productId: $(event.target).attr('data-id'),
            productWight: $(event.target).siblings('.product-item-weight').text().trim(),
        };
        console.log(product.productImage)

        let cart = localStorage.getItem('cart');
        let itemId = $(event.target).attr('data-id');


        if (cart) {
            let cartArray = JSON.parse(cart);

            let cartPosition = false

            for (let i = 0; i < cartArray.length; i++) {
                if (cartArray[i].productId === itemId) {

                    cartArray[i].productCount += 1
                    cartArray[i].productSum = cartArray[i].productPrice * cartArray[i].productCount
                    cartPosition = true

                }

            }
            if (cartPosition === false) {
                cartArray.push(product);
                for (let i = 0; i < cartArray.length; i++) {
                    if (cartArray[i].productId === itemId) {
                        cartArray[i].productCount += 1

                    }
                }
            }

            localStorage.setItem('cart', JSON.stringify(cartArray));

        } else {
            let cartArray = []
            cartArray.push(product);
            for (let i = 0; i < cartArray.length; i++) {
                if (cartArray[i].productId === itemId) {
                    cartArray[i].productCount += 1

                }
            }

            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
        ;


        sumMoney();

        sumPieces();

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

            console.log(number)

            if (number === 0) {

                totalSum.text(sumCost + ' руб.');
            }
        });



    });
    // ----------------- * End Click * ----------------------

    sumMoney();

    sumPieces();

// ---------- Added sum and count to cart and form

    cartSum.text(sumProd + ' шт');
    cartSumCost.text(sumCost + ' руб');

// ---------- Total sum -----------

    totalSumItems();


})
;