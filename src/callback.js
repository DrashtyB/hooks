import React, { useState, useCallback } from "react";
// const functions = new Set();

// export default function Callback() {
//   const [counter, setCounter] = useState(0);
//   const [demo, setDemo] = useState(0);

//   const callbackButton1 = useCallback(() => {
//     setCounter(counter + 10);
//     console.log("Counter:", counter);
//   }, [counter]);

//   const callbackButton2 = useCallback(() => {
//     setCounter(counter - 10);
//     console.log("Counter:", counter);
//   }, [counter]);

//   const Test = useCallback(() => {
//     setDemo(demo + 1);
//     console.log("Demo:", demo);
//   }, [demo]);

//   functions.add(callbackButton1);
//   functions.add(callbackButton2);
//   functions.add(Test);
//   console.log("Functions:", functions.size);

//   return (
//     <div>
//       <p>"useCallback demo"</p>
//       <input type="text" defaultValue={counter || ""} />
//       <br />
//       <button onClick={callbackButton1}>Add</button>
//       <button onClick={callbackButton2}>Subtract</button>
//       <button onClick={Test}>demo</button>
//       <p>{demo}</p>
//     </div>
//   );
// }

import Title from "./callback_components/Title";
import Textbox from "./callback_components/Textbox";
import Button from "./callback_components/Button";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const incrementCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  // const incrementCounter = () => {
  //   setCount(count + 1);
  // };

  const updateName = useCallback(
    e => {
      setName(e.target.value);
    },
    []
  );

  // const updateName = event => {
  //   setName(event.target.value);
  // };

  return (
    <div>
      <Title />

      <Button count={count} handleClick={incrementCounter} />
      <label>Name is {name}</label>
      <Textbox text={name} handleClick={updateName} />
    </div>
  );
}
