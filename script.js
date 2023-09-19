const button = document.querySelector("#interactiveButton")

function plant() {// after
    document.getElementById('interactiveImg').src = 'after.jpg';

    var el = document.getElementById('animate');
    el.remove();
}

button.addEventListener('click', plant)

function Menu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " mobile";
    } else {
        x.className = "menu";
    }
}
