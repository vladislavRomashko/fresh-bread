ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [47.842606, 35.131009],
        zoom: 17,
        controls: [],
        autoPan: true,
        autoPanCheckZoomRange: true,
    }, {
        searchControlProvider: 'yandex#search'
    });

    var placemark = new ymaps.Placemark(myMap.getCenter(), {

        // // Зададим содержимое основной части балуна.
        balloonContentBody:
            '<div class="map-item"><div class="balon-img"><img src="images/pin.png" ></div>  <span id="address">г. Запорожье,Соборный, д. 147</span></div>' +
            '<div class="map-item"><div class="balon-img"><img src="images/telephoneSmall.png"></div>  <span class="map-text">+7 (526) 987 00 88</span> </div> ' +
            '<div class="map-item"><div class="balon-img"><img src="images/clock.png"></div> <span class="map-text">Пн-Пт: с 8:00 до 20:00</span>  </div>'

    });
    // Добавим метку на карту.
    myMap.geoObjects.add(placemark);
    // Откроем балун на метке.
    placemark.balloon.open();
}