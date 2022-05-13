const cpf = "00000000000"

try {
    if (cpf.length != 11) {
        throw{
            "name" : "cpfTamanhoInvalido",
            "message" : "O tamanho do CPF é inválido"
        }
    } else {
        console.log("O tamanho do CPF é inválido")
    }
}catch (error){
    console.log(error)
}