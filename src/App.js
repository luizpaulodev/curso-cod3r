import React from 'react';

// import Contador from './components/Contador/Contador';
import ContadorHook from './components/ContadorHook/ContadorHook';

function App() {
  return (
    <div className="App">      
      {/* <Contador numeroInicial={0} /> */}
      <ContadorHook numeroInicial={0} />

    </div>
  );
}

export default App;
