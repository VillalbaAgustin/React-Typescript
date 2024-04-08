import { Counter, CounterReducer, TimerPadre, User } from "./components";

export const App = () => {
  return (
    <>
      <h1 className="mt-3 mb-3">React + Typescript</h1>
      <hr />
      <h2>useState</h2>
      <hr />
      <Counter />

      <User />
      
      <hr />
      <h2>useEffect && useRef</h2>
      <hr />

      <TimerPadre/>

      <hr />
      <h2>useReducer</h2>
      <hr />

      <CounterReducer/>
    </>
  );
};
