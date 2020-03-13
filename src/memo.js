import React, { useState, useMemo } from "react";

function Memo() {
  const [count1, setCount1] = useState(null);
  const [count2, setCount2] = useState(null);
  const multiplier = (count1, count2) => {
    return count1 * count2;
  };
  const memoCount = useMemo(() => {
    return multiplier(count1, count2);
  }, [count1, count2]);
  console.log('memoCount:', memoCount)
  return (
    <div>
      <p>"useMemo:"</p>
      Count: {memoCount}
      <br />
      <input
        type="text"
        onChange={e => setCount1(e.target.value)}
        placeholder="Count 1"
      />
      <input
        type="text"
        onChange={e => setCount2(e.target.value)}
        placeholder="Count 2"
      />
    </div>
  );
}
export default Memo;
