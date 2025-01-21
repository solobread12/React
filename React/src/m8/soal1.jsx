import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={increment} style={{ margin: '5px', padding: '10px 20px' }}>
          Tambah
        </button>
        <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px' }}>
          Kurangi
        </button>
        <button onClick={reset} style={{ margin: '5px', padding: '10px 20px' }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;