import React, { useState } from "react";
import "./App.css";
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme =>({
  button: {
    marginLeft: 20
  }
}))
function App({text, maxLength}) {
  const classes = useStyles()
  const [display, setDisplay] = useState(true);
  if (text === maxLength) {
    return <p>{ text }</p>;
  }
  return (
    <div>
      {display ? '{text.substr(0,0).trim()}': text}
      <br/>
      <div className={classes.button}>
      {display ? (
        <button onClick={() => setDisplay(false)}>Hide</button>
      ) : (
        <button onClick={() => setDisplay(true)}>Show</button>
      )}
      </div>
    </div>
  );
}

function Show() {
  return <App text={'React hook'} maxLength={10}></App>;
}
export default Show;
