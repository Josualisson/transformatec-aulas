let a = 0;
let b = 1;

// try = tente
try{
    // Variável "C" não existe
    console.log(a + c)
    // catch = captura o erro   
}catch(e){
    // e: parâmetro com um objeto do tipo Error
    console.log("erro" + e)
}