function cep(){
    let estado = document.getElementById("estado").value;
    let cidade = document.getElementById("cidade").value;
    let rua = document.getElementById("rua").value;
    const url = `https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`
    const encoded = encodeURI(url);

    fetch(url)
    .then(response => response.json())
    .then((json) => {
        let cep = document.getElementById("apareceCep")

        cep.innerHTML = "CEP: " + json[0].cep;
    })
    .catch(() => {
        let cep = document.getElementById("apareceCep")
        cep.innerHTML = "CEP NÃO ENCONTRADO "
    })
}