import React, { useReducer } from "react";

const initialState = { text: "", list: ["One", "Two"] };

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_TEXT":
      return { ...state, text: action.text };
    case "ADD_DATA":
      return { ...state, list: [...state.list, state.text], text: "" };
    default:
      throw new Error();
  }
}
function TodoReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSubmit = event => {
        event.preventDefault();
    };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.text}
          onChange={event =>
            dispatch({ type: "CHANGE_TEXT", text: event.target.value })
          }
        />
        <button onClick={() => dispatch({ type: "ADD_DATA" })}>Add</button>
      </form>
      <br />
      <ul>
        {state.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoReducer;
