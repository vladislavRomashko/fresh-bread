<?php
// Проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем параметры, посланные с javascript
    $delMeth1 = $_POST['method1'];
    $delMeth2 = $_POST['method2'];
    $card = $_POST['card'];
    $cash = $_POST['cash'];
    $name = $_POST['name'];
    $name2 = $_POST['second-name'];
    $phone = $_POST['phone'];
    $comments = $_POST['comments'];
    $localCartStorage = $_POST['localCartStorage'];
    $cartSum = $_POST['cartSum'];


    // создаем переменную с содержанием письма
    $content = $name . $name2 . ' оставил заявку на заказ. ' . 'Его телефон: ' . $phone . '. Способ оплаты:' . $card . $cash . '. Способ доставки:' . $delMeth1 . $delMeth2 . '. Коментарии к заказу:' . $comments . '. Заказ:' . $localCartStorage . '. На сумму:' . $cartSum;

    // Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
    $success = mail("order@bread-nsk.ru", 'Заказа хлебобулочных изделий', $content);

    if ($success) {
        // Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        // Отдаем ошибку с кодом 500 (internal server error).
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}