let x;
x = 11

try{
    if(x <= 10){
        console.log("Número aceito!")
    }else{
        throw "Erro! Número não aceito!"
    }
}catch(error){
    console.log(error)
}