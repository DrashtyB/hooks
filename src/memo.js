import React, { useCallback, useState } from "react";

const Count = React.memo(function Count({ count, onClick }) {
  return <button onClick={onClick}>{count}</button>;
});
console.log('count', Count)

function Memo() {
  const [state, setState] = useState(0);
  const add = useCallback(() => setState(state + 1), [state]);
  return (
    <div>
      <p>"useMemo demo</p>
      <Count count={state} onClick={add} />
    </div>
  );
}

export default Memo;
