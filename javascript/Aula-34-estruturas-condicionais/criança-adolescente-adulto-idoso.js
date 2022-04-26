var idade = 13;

if(idade >= 18 && idade < 60){
    console.log("Você tem: " + idade, "Anos, Você é um Adulto");
}else if(idade < 18 && idade > 12){
    console.log("Você tem: " + idade, "Anos, Você é um Jovem");
}else if(idade < 12){
    console.log("Você tem: " + idade, "Anos, Você é uma Criança")
}else if(idade >= 60){
    console.log("Você tem: " + idade, "Anos, Você é um Idoso")
}