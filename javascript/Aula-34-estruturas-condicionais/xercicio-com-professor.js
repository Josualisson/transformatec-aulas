///variável do tipo objeto
var pessoa = {
    nome:"Cassiano",
    idade:32,
    estudante: false
}

switch(pessoa.estudante){
    case true:
        console.log("Estudante")
        break;
    case false:
        console.log("Graduado")
        break;
    default:
        console.log("Aluno não registrado")
        break;
}
