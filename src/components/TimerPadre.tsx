import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
  const [milliSeconds, setMilliSeconds] = useState(1000);
  return (
    <>
      <span>Millisecond: {milliSeconds}</span>
      <br />
      <button
        className="btn btn-outline-success"
        onClick={() => setMilliSeconds(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMilliSeconds(2000)}
      >
        2000
      </button>
      <Timer milisegundos={milliSeconds} />
    </>
  );
};
