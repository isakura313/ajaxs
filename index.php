<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ajaxs</title>
    <script src="main.js" async></script>
    <link rel="stylesheet" href="node_modules/bulma/css/bulma.css">
</head>
<body>
<div class="columns has-background-link is-centered">
    <div class="column is-4 ">
        <label for="word"> Поиск товара</label>
        <input type="text" class="input search" name="word" placeholder="Введите слово">
        <label for="price"> Искать по цене</label>
        <select name="price" id="" class="btn__sort select">
            <option value="ASC">по возрастанию</option>
            <option value="DESC">по убыванию</option>
        </select>
    </div>
</div>
<div class="columns is-multiline result is-centered">
<!--    <div class="column is-4 ">-->
<!--        <div class="result "></div>-->
<!--    </div>-->
</div>
</body>
</html>

