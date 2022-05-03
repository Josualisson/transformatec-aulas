

var paragrafo = document.getElementById("media").innerHTML = "Resultado: "

function mediaAluno(){


    var n1 = document.getElementById("nota1").value
    n1 = Number(n1)
    var n2 = document.getElementById("nota2").value
    n2 = Number(n2)
    var n3 = document.getElementById("nota3").value
    n3 = Number(n3)
    var n4 = document.getElementById("nota4").value
    n4 = Number(n4)
    var nome = document.getElementById("nome").value

    m = 7



    var mediaNotas = (n1 + n2 + n3 + n4) / 4
    
    if(mediaNotas >= m){
        document.getElementById("media").innerHTML = paragrafo + " Olá " + nome + " Sua média foi: " + mediaNotas + " Você foi: Aprovado!"
    }else{
        document.getElementById("media").innerHTML = paragrafo + " Olá " + nome + " Sua média foi: " + mediaNotas + " Você foi: Reprovado"
    } 

}


