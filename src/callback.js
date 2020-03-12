import React, { useState, useCallback } from "react";

function Callback() {
  const [state, setState] = useState(0);
  const [val, setValue] = useState("");
  
  const callbackText = useCallback(() => {
    setValue(val + "!");
  }, [val]);

  const callbackButton = useCallback(() => {
    setState(state + 1);
  }, [val, state]);
  console.log("callbackButton:", callbackButton);

  return (
    <div>
      <p>"useCallback demo"</p>
      <input type="text" value={val} onChange={callbackText} />
      <button onClick={callbackButton}>CallBack</button>
      <p>{state}</p>
    </div>
  );
}

export default Callback;
