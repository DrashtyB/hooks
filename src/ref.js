import React, { useRef, useImperativeHandle, forwardRef } from "react";

let Imperative = (props, ref) => {
  const refInput = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      refInput.current.focus();
    }
  }));
  return <input ref={refInput} />;
};
Imperative = forwardRef(Imperative);

export default function Ref() {
  const refInput = useRef();
  console.log('refInput', refInput);
  return (
    <div>
      <p>"useRef demo"</p>
      <button
        onClick={() => {
          refInput.current.focus();
        }}
      >
        Ref
      </button>
      <br />
      <Imperative ref={refInput} />
    </div>
  );
}
