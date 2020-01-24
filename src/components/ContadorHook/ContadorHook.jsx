import React, { useState, useEffect } from 'react';

export default props => {

  // Indice 0 = é o valor que será alterado
  // Indice 1 = é uma função que altera o estado
  const [contador, setContador] = useState(0);
  const [status, setStatus] = useState('Par');

  useEffect(() => {
    contador % 2 === 0 ? setStatus('Par') : setStatus('Impar');
  }, [contador]);

  return (
    <div>
      <h1>{contador}</h1>
      <h2>{status}</h2>
      <button onClick={() => setContador(contador + 1)}>Adicionar</button>
    </div>
  );
}