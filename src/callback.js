import React, { useState, useCallback } from "react";
const functions = new Set();

export default function Callback() {
  const [counter, setCounter] = useState(0);
  const [demo, setDemo] = useState(0);

  const callbackButton1 = useCallback(() => {
    setCounter(counter + 10);
    console.log("Counter:", counter);
  }, [counter]);

  const callbackButton2 = useCallback(() => {
    setCounter(counter - 10);
    console.log("Counter:", counter);
  }, [counter]);

  const Test = useCallback(() => {
    setDemo(demo + 1);
    console.log("Demo:", demo);
  }, [demo]);

  functions.add(callbackButton1);
  functions.add(callbackButton2);
  functions.add(Test);
  console.log("Functions:", functions.size);

  return (
    <div>
      <p>"useCallback demo"</p>
      <input type="text" defaultValue={counter || ""} />
      <br />
      <button onClick={callbackButton1}>Add</button>
      <button onClick={callbackButton2}>Subtract</button>
      <button onClick={Test}>demo</button>
      <p>{demo}</p>
    </div>
  );
}
