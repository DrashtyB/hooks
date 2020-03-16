import React, { useState, useMemo, useEffect } from "react";

const list = [10, 60, 40, 30, 90, 0];

export default function Memo() {
  const [count, setCount] = useState(0);

  // Render only when a list change occurs, and if there is no change, use the memorized contents
  const sort = useMemo(() => {
    console.log("useMemo");
    return list.sort((a, b) => a - b);
  }, [list]);

  // When used in general, it works very well in Re-render.
  const normalSort = list.sort((a, b) => a - b);

  useEffect(() => {
    console.log("re-render");
  });

  return (
    <div>
      <h3>useMemo Sort</h3>
      {sort.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <h3>Normal Sort</h3>
      {normalSort.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <br />
      <button onClick={() => setCount(count + 1)}>Re Render</button>
    </div>
  );
}

// export default function Memo() {
//   const [count1, setCount1] = useState(null);
//   const [count2, setCount2] = useState(null);

//   const multiplier = (count1, count2) => {
//     return count1 * count2;
//   };
//   const memoCount = useMemo(() => {
//     return multiplier(count1, count2);
//   }, [count1]);

//   console.log("memoCount:", memoCount);

//   return (
//     <div>
//       <p>"useMemo:"</p>
//       Count: {memoCount}
//       <br />
//       <input
//         type="text"
//         onChange={e => setCount1(e.target.value)}
//         placeholder="Count 1"
//       />
//       <br/>
//       <input
//         type="text"
//         onChange={e => setCount2(e.target.value)}
//         placeholder="Count 2"
//       />
//     </div>
//   );
// }
