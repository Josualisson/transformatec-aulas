import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Item from './components/Index';

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>

      <HelloWorld />

      <Item texto="Item 1" />

      <Item texto="Item 2" />

      <Item texto="Item 3" />


    </div>
  );
}

export default App;