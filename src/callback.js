import React, { useState, useCallback } from "react";

function Callback() {
  const [state, setState] = useState(0);
  const callback = useCallback(() => {
    setState(state + 1);
    console.log(state)
  }, [state]);
  return (
    <div>
      <p>"useCallback demo"</p>
      <input type="text"/>
      <button onClick={callback}>CallBack</button>
      <p>{state}</p>
    </div>
  );
}

export default Callback;
