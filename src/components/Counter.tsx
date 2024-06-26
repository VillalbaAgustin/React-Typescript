import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementar = (i: number): void => {
    setCounter(counter + i);
  };

  return (
    <div className="mt-5">
      <h4>Counter: useState</h4>
      <span>Valor: {counter}</span>
      <br />
      <button onClick={() => incrementar(1)} className="btn btn-primary mt-2">
        +1
      </button>
      <button onClick={() => incrementar(2)} className="btn btn-primary mt-2">
        +2
      </button>
      <button onClick={() => setCounter(0)} className="btn btn-outline-danger mt-2">
        Reset
      </button>
    </div>
  );
};
