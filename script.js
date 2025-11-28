// Находим контейнер
let container = document.getElementById("container");

// Создаём 4 тега <p>
for (let i = 1; i <= 4; i++) {
    let p = document.createElement("p");
    p.id = "tag" + i;
    p.innerText = "Я создан с помощью JavaScript #" + i;
    container.appendChild(p);
}

// Функция — вызывается по onclick
function changeColor() {
    document.getElementById("tag1").style.color = "red";
    document.getElementById("tag2").style.color = "blue";
    document.getElementById("tag3").style.color = "green";
    document.getElementById("tag4").style.color = "purple";
}

// jQuery пример
$("#jqButton").click(function () {
    alert("Это пример jQuery!");
});
