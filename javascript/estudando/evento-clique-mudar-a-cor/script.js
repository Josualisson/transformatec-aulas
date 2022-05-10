var container = document.getElementById("container");
var letra = document.getElementById("letra")

/* container.style.background = "black";
container.style.height = "100vh";
container.style.with = "100vh"; */



function btn1(){
container.style.background = "red";
}
function btn2(){
container.style.background = "orange";
}
function btn3(){
container.style.background = "green";
}
function escolher(){
    var Cor = document.getElementById("escolherCor").value;

    container.style.background = Cor
}
function escolherLetra(){
    var letraCor = document.getElementById("letraColor").value


    letra.style.color = letraCor
}


