import React, { useRef, useImperativeHandle, forwardRef } from "react";

function Imperative(props, ref) {
  const refImperative = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      refImperative.current.focus();
    }
  }));
  return <input ref={refImperative} />;
}
Imperative = forwardRef(Imperative);

function Ref() {
  const refInput = useRef();
  //   const handleRef = () => {
  //     const element = refInput.current;
  //     console.log("element:", element);
  //   };

  return (
    <div>
      <p>"useRef demo"</p>
      <Imperative ref={refInput} />
      {/* <p ref={refInput}>Hello</p>
      <p ref={refInput}>Hi</p> */}
      <button
        onClick={() => {
          refInput.current.focus();
        }}
      >
        Ref
      </button>
    </div>
  );
}

export default Ref;
