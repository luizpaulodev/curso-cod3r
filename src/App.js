import React from 'react';
import './App.css'

// import Contador from './components/Contador/Contador';
// import ContadorHook from './components/ContadorHook/ContadorHook';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className="App">      
      {/* <Contador numeroInicial={0} /> */}
      {/* <ContadorHook numeroInicial={0} /> */}

      <h1>Calculadora</h1>
      <Calculator />

    </div>
  );
}

export default App;
