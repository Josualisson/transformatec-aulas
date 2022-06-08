import AppCss from './components/Styles.css'
import { useState } from 'react';
const App = () => {

  const [number, setNumber] = useState(0);

  const adicionar = () => {
    setNumber(number + 1);
  }
  const remover = () => {
    setNumber(number - 1);
  }

  const claro = () => {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = 'black';
    document.body.style.transitionDuration = '2s';
    document.getElementById('modos').innerHTML = 'Modo Escuro';
  }

  const escuro = () => {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
    document.getElementById('modos').innerHTML = 'Modo Claro';
  }

  return (
    <div className='app'>
      <h1>Contador</h1>
      
      <input 
      type="submit"
       value='Modo Claro'
       id='modos'
      onClick={ () => {
        claro();
      } }
      ></input>
      <input 
      type="submit"
       value='Modo Escuro'
       id='modos'
      onClick={ () => {
        escuro();
      } }
      ></input>

      <button 
      id='btn-add'
      onClick={ () => {
        adicionar()
      }}>
        +</button>
      <p> {number} </p>
      <button 
      onClick= { () => {
      remover()
      }}  >-</button>
    </div>
  );
}


export default App;
