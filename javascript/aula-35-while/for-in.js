let carro = {
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
    }
    for (propriedade in carro) {
        console.log(propriedade +":"+carro[propriedade]);
    }
//     console.log(propriedade);//resultado "marca", "modelo" e "cor" = ele vai falar somente os nomes das propriedades e não o valor
//     console.log[propriedades]; // resultado "ford", "fiesta", "prata" = pois ele vai falar os valores

