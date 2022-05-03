const fila = [
    {
        nome:"Cassiano",
        sobrenome: "Peres",
        idade: 32
    },
    {
        nome:"Jose",
        sobrenome: "Silva",
        idade: 33
    },
    {
        nome:"Carlos",
        sobrenome: "Pereira",
        idade: 34
    }
]

//varrendo o array da fila obtendo cada pessoa
/* for(pessoa of fila){
    console.log(pessoa.nome)
} */

//varrendo o array da fila obtendo o índice de cada pessoa no array
for(pessoa of fila.entries()){
    //imprime a pessoa com o seu indice
    console.log(pessoa)
    //imprime o indice e o nome da pessoa
    console.log(pessoa[0] + ":" + pessoa[1].nome)
}
