var amazonPrime = {
    nome: "Amazon Prime",
    mensalidade: 30.00
}
var netflix = {
    nome: "Netflix",
    mensalidade: 50.00
}
var hboMax = {
    nome: "HBO Max",
    mensalidade: 35.50
}
var disneyPlus = {
    nome: "Disney Plus",
    mensalidade: 20.00
}

var opcao = 'a';

switch(opcao){
    case 'a':
        console.log("Você escolheu o", amazonPrime.nome, "Cujo a mensalidade é de:", "R$" + amazonPrime.mensalidade, "Reais")
    break;
    case 'n':
        console.log("Você escolheu o", netflix.nome, "Cujo a mensalidade é de:", "R$" + netflix.mensalidade, "Reais")
    break;
    case 'h':
        console.log("Você escolheu o", hboMax.nome, "Cujo a mensalidade é de:", "R$" + hboMax.mensalidade, "Reais")
    break;
    case 'd':
        console.log("Você escolheu o", disneyPlus.nome, "Cujo a mensalidade é de:", "R$" + disneyPlus.mensalidade, "Reais")
    break;
}



/* var opcao = 'o';

switch(opcao) {
    case 'a':
        console.log("Amazon Prime");
    break;

    case 'n':
        console.log("Netflix");
    break;

    case 'h':
        console.log("HBO Max");
    break;

    case 'd':
        console.log("Disney Plus");
    break;

    default:
        console.log("Opção inválida")
    break;
} */