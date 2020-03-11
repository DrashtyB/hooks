import React, { useContext } from "react";

const options = {
  language: {
    frontend: "frontend",
    backend: "backend"
  }
};
const optionContext = React.createContext(options.language);
function AppContext() {
  return (
    <div>
      <p>"useContext demo"</p>
      <optionContext.Provider value={options.language}>
        <Option text={'abc'}/>
      </optionContext.Provider>
    </div>
  );
}
function Option({text}) {
  const language = useContext(optionContext);
  return (
    <div>
      <p>{text !== '' ? language.frontend : language.backend}</p>
    </div>
  );
}

export default AppContext;
