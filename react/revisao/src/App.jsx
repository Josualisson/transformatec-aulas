import './App.css';

function App() {
  return (
    <div className="App">

        <button
        onClick={() => {
          var body = document.getSelection('body');

          body.style.backgroundColor = "black"
        }
      }
        >
          Modo Escuro
        </button>



    </div>
  );
}

export default App;
