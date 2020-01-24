import React from 'react';

import Contador from './components/Contador/Contador';

function App() {
  return (
    <div className="App">      
      <Contador numeroInicial={0} />
    </div>
  );
}

export default App;
