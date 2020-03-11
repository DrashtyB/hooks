import React, { useReducer } from "react";

const initialState = { text: "useReducer" };

function Reducer(state, action) {
  switch (action.type) {
    case "show":
      return { text: action.text };
    case "hide":
      return { text: null };
    default:
      throw new Error();
  }
}
function AppReducer() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div>
      <p>"useReducer demo: " {state.text}</p>
      <div>
        <button onClick={() => dispatch({ type: "show", text: 'useReducer' })}>Show</button>

        <button onClick={() => dispatch({ type: "hide" })}>Hide</button>
      </div>
    </div>
  );
}

export default AppReducer;
