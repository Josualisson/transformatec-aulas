
var botao = document.getElementById("btn").addEventListener("click", function myFunction(){


    var text = document.getElementById("text").value

    var add = document.createElement("p")

    add.innerHTML = text;

    var adicionandoDiv = document.createElement("div");

    document.body.appendChild(add, adicionandoDiv);


});


