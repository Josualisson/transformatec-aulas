let a = 50;
let b = 30;

// executa o código
try {
    console.log(a + b)
    // captura o erro
}catch(error){
    console.log(error)
    //Faz a conclusão do programa
}finally {
    console.log("Final da execução ")
}