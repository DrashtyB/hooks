import React, { useState, useCallback, useMemo } from "react";

function Callback() {
  const [state, setState] = useState(0);
  const [val, setValue] = useState('');
  
  const callbackText = useCallback(() => {
    setValue(val + "!");
  },[val]);
  console.log('callBackText', callbackText)

  const callbackButton = useCallback(() => {
    setState(state + 1);
  }, [val, state]);

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
