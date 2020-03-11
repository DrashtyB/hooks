import React, { useContext } from "react";

const options = {
  language: {
    frontend: "ReactJS",
    backend: "NodeJS"
  }
};
const optionContext = React.createContext(options.language);
function Test() {
  return (
    <div>
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
      <p>{text === '' ? language.frontend : language.backend}</p>
    </div>
  );
}

export default Test;
