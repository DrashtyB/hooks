import React, { useState, useEffect } from "react";
import AppReducer from "./hook2";
import { makeStyles } from "@material-ui/core";
import Test from "./hook3";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 20,
    marginTop: 10
  }
}));
function App({ text }) {
  const classes = useStyles();
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    console.log("useEffect hook");
  }, [display]);

  return (
    <div className={classes.root}>
      {display ? `${text.substr(0, 0)}` : text}
      <br />
      <div>
        {display ? (
          <button onClick={() => setDisplay(false)}>Show</button>
        ) : (
          <button onClick={() => setDisplay(true)}>Hide</button>
        )}
      </div>
      <AppReducer/>
      <Test/>
    </div>
  );
}

function Show() {
  return <App text={"useState hook"}/>;
}
export default Show;
