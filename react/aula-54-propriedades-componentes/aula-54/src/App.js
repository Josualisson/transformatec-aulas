import './App.css';

//Importando um componente externo
import HelloWorldDIO from './components/HelloWorlDIO';
import HelloWorldDIOClass from './components/HelloWorldDIOClass'
import HelloPeople from './components/HelloPeople'
import Calculator from './components/Calculator'
import HelloPerson from './components/HelloPerson'
import HelloCalc from './components/HelloCalc'

//Função que agrupa todos os componentes que serão renderizados
function App() {

  let a = 5
  let b = 10

  let person = {
    nome: 'Cassiano',
    sobrenome: 'Peres'
  }

  //Retorno da função
  return (
    <div className="App">

      {/* Chamando o componente importado */}
      <HelloWorldDIO />
      <HelloWorldDIOClass/>
      <HelloPeople name="Josué Alisson " age="21"/>
      <Calculator n1={a} n2={b}/>
      <HelloPerson  person={person}/>
      <HelloCalc/>
    </div>
  );
}

//Exportar o componente App para ser renderizado
export default App;
