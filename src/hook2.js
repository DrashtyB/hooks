import React, { useReducer } from "react";

const initialState = { text: "useReducer" };

function Reducer(state, action) {
  switch (action.type) {
    case "show":
      return { text: state.text };
    case "hide":
      return {text: null};
    default:
      throw new Error();
  }
}
function AppReducer() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log('Reducer', state.text)

  return (
    <div>
      <p>useReducer demo: {state.text}</p>
      <div>
        <button onClick={() => dispatch({ type: "show" })}>Show</button>

        <button onClick={() => dispatch({ type: "hide" })}>Hide</button>
      </div>
    </div>
  );
}

export default AppReducer;
