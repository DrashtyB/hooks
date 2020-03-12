import React, { useRef, useImperativeHandle } from "react";

function Ref(ref) {
  const refInput = useRef(null);
  const handleRef = () => {
    // alert("Ref clicked");
    const element = refInput.current;
    console.log("element", element);
  };
//   useImperativeHandle(ref, () => ({
//       focus: () => {
//           document.title = "useRef"
//           refInput.current.focus()
//       }
//   }))
  return (
    <div>
      <p>"useRef demo"</p>
      <p ref={refInput}>Hello</p>
      <p ref={refInput}>Hi</p>
      <button onClick={handleRef}>Ref</button>
    </div>
  );
}
export default Ref;
