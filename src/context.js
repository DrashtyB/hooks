import React, { useContext, useState } from "react";

const options = {
  frontend: "frontend",
  backend: "backend"
};
const optionContext = React.createContext(options);

export default function AppContext() {
  return (
    <div>
      <p>"useContext demo"</p>
      <optionContext.Provider value={options}>
        <Option />
      </optionContext.Provider>
    </div>
  );
}

function Option() {
  const language = useContext(optionContext);
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Language</button>
      <p>{toggle ? language.frontend : language.backend}</p>
    </div>
  );
}
