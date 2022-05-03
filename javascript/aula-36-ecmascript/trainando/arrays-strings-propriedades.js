let aluno = [
    {
        nome: 'Josué Alisson',
        idade: 21,
        media: 5
    },
     {
        nome: 'Melissa Azevedo',
        idade: 20,
        media: 9
    },
    {
        nome: 'Jamily Freitas',
        idade: 19,
        media: 8.5
    }
]


aluno[0].media >= 7 ? console.log("Olá", aluno[0].nome, "sua média foi:", aluno[0].media, ", você foi Aprovado") : console.log("Olá", aluno[0].nome, "sua média foi:", aluno[0].media, ", você foi Reprovado")
// ele tpa pegando o aluno do index 0 que é Josué e tá tirando sua média e avisando se foi rprovado ou aprovado
aluno[1].media >= 7 ? console.log("Olá", aluno[1].nome, "sua média foi:", aluno[1].media, ", você foi Aprovado") : console.log("Olá", aluno[1].nome, "sua média foi:", aluno[1].media, ", você foi Reprovado")
// // ele tpa pegando o aluno do index 0 que é Melissa e tá tirando sua média e avisando se foi rprovado ou aprovado
aluno[2].media >= 7 ? console.log("Olá", aluno[2].nome, "sua média foi:", aluno[2].media, ", você foi Aprovado") : console.log("Olá", aluno[0].nome, "sua média foi:", aluno[2].media, ", você foi Reprovado")











