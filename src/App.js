import React, { useState, useEffect } from "react";
import AppReducer from "./reducer";
import { makeStyles } from "@material-ui/core";
import AppContext from "./context";
import Callback from "./callback";

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
    console.log("useEffect onMount");
  }, []);

  useEffect(() => {
    console.log("useEffect onUpdate");
  }, [display]);
  
  useEffect(() => {
    console.log("useEffect onUnMount");
  }, []);

  return (
    <div className={classes.root}>
      <p>"useState & useEffect demo"</p>
      {display ? `${text.substr(0, 0)}` : text}
      <br />
      <div>
        <button onClick={() => setDisplay(!display)}>
          {display ? "Show" : "Hide"}
        </button>
      </div>
      <AppReducer />
      <AppContext />
      <Callback />
    </div>
  );
}

function Show() {
  return <App text={"useState hook"} />;
}
export default Show;
