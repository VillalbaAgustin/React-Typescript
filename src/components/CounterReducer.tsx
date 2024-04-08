

const initialState = {
  counter: 0,
}

type ActionType = {
  type: 'increment'
}

const counterReducer = (state: typeof initialState, action: ActionType) => {
switch (action.type) {
  case 'increment':
    return{
      ...state,
      counter: state.counter
    }
    
    break;

  default:
    break;
}
}

export const CounterReducer = () => {
  return (
    <>
      <h2>Contador: {10}</h2>
    </>
  );
};
