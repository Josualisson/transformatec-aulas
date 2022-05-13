let a = 50;

try {
    console.log(a * b)
}catch(erro){
    //se o erro for do tipo referenceerror
    if(erro instanceof ReferenceError){
        console.log("ERRO DE VARIÁVEL NÃO DECLARADA: ", erro)
    }else {
        console.log("outro tipo de erro")
    }
}