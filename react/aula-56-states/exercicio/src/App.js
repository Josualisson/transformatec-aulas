import './App.css';
import StateColor from './components/StateColor'
import StateCar from './components/StateCar'
import StatePerson from './components/StatePerson'
import StateClock from './components/StateClock'

function App() {
  return (
    <div className="App">
      <StateColor color="azul"/>
      <StateCar />
      <StatePerson nome="Josué" profissao="Programador" idade="21" />
      <StateClock />
    </div>
  );
}

export default App;
