var button = document.getElementById("button").addEventListener("click", trocaCor);

var button1 = document.getElementById("button").removeEventListener

function trocaCor() {
    var div = document.getElementById("div");

    div.style.backgroundColor = "orange";
}