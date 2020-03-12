import React, { useContext } from "react";

const options = {
  languages: {
    frontend: "frontend",
    backend: "backend"
  }
};
const optionContext = React.createContext(options.languages);

function AppContext() {
  return (
    <div>
      <p>"useContext demo"</p>
      <optionContext.Provider value={options.languages}>
        <Option text={"abc"} />
      </optionContext.Provider>
    </div>
  );
}

function Option({ text }) {
  const language = useContext(optionContext);
  
  return (
    <div>
      <p>{text !== "" ? language.frontend : language.backend}</p>
    </div>
  );
}

export default AppContext;
