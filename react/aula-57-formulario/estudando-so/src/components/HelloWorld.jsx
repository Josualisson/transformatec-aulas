var nome = [{
    nome: 'Rafael',
    sobrenome: 'Santos',
    idade: 16
}];

    
const HelloWorld = () => {
    
    return (
        <div>
            <h2>Hello, {nome[0].nome} {nome[0].sobrenome}, sua idade é: {nome[0].idade} anos  </h2>

            <input 
            type="email" 
            id="email"
            placeholder="Digite seu email"
             />

            <input
             type="password"
             id="senha"
             placeholder="Senha" />

             <input 
             type="submit" 
             value="Entrar" 
             id="entrar"
             />
             
        </div>



    );


}


export default HelloWorld;