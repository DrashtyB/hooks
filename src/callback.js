import React, { useState, useCallback } from "react";

function Callback() {
  const [state, setState] = useState(0);
  const [val, setValue] = useState("");

  const callbackText = useCallback((event) => {
    setValue(event.target.val);
  }, [val]);

  const callbackButton = useCallback(() => {
    setState(state + 1);
    console.log("callbackButton:", callbackButton);
  }, [state]);

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
