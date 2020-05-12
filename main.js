'use strict'
let result = document.querySelector(".result");
let btn__sort = document.querySelector(".btn__sort")
let input = document.querySelector("input")


// console.log(btn__sort.value);

console.log(window.location.hostname);

let path = window.location.hostname;
function Query(sort){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://${path}:8080/handler.php?sort=${sort}`);
    xhr.send()

    let that = this;
    xhr.addEventListener("load", function(){
        console.log(xhr);
        let norm_data = xhr.responseText;
        norm_data = JSON.parse(norm_data);
        console.table(norm_data);
        draw_data(result, norm_data);
    })
}
Query('ASC');


btn__sort.onchange = () => {
    let sort_position = btn__sort.value;
    Query(sort_position);
}

function draw_data(enterElement, obj){
    enterElement.innerHTML = '';
    for (let i = 0; i < obj.Tags.length; i++){
        enterElement.insertAdjacentHTML("beforeend",
            `
                <div class="column is-one-quarter"
                <figure class="image is-128x128">
                    <img src='${obj.Img[i]}'>
                   </figure>
                    <p class="subtitle"> ${obj.Tags[i]}</p>
                    <p>цена  у товара ${obj.Price[i]}</p>
                    <p>рейтинг  у товара ${obj.Rating[i]}</p>
                </div>

`);
    }
}