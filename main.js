'use strict'
let result = document.querySelector(".result");
let btn__sort = document.querySelector("btn__sort")
let input = document.querySelector("input")


console.log(window.location.hostname);

let path = window.location.hostname;
function defaultQuery(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://${path}:8080/ajax/handler.php?sort=ASC`);
    xhr.send()

    let that = this;
    xhr.addEventListener("load", function(){

        let norm_data = xhr.responseText;
        norm_data = JSON.parse(norm_data);
        console.table(norm_data);
        draw_data(result, norm_data);
    })
}
defaultQuery();

function draw_data(enterElement, obj){
    for (let i = 0; i < obj.Tags.length; i++){
        enterElement.insertAdjacentElement("afterbegin",
            `<img src='${obj.Img[i]}'> <br/>
                <p class="subtitle"> ${obj.Tags[i]}</p>
                <p>рейтинг у товара ${obj.Price[i]}</p>`);
    }
}