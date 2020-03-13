import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import AppReducer from "./reducer";
import AppContext from "./context";
import Callback from "./callback";
import Ref from "./ref";
import Memo from "./usememo";
import Effect from "./Effect";
import App from './App'
const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 20,
    marginTop: 10
  }
}));
function App1({ text }) {
  const classes = useStyles();
  const [display, setDisplay] = useState(true);

  return (
    <div className={classes.root}>
      <App/>
      <hr/>
      <div>
        <p>"useState & useEffect demo"</p>
        {display ? `${text.substr(0, 0)}` : text}
        <br />
        <button onClick={() => setDisplay(!display)}>
          {display ? "Show" : "Hide"}
        </button>
      </div>
      <Effect />
      <AppReducer />
      <AppContext />
      <Callback />
      <Ref />
      <Memo />
    </div>
  );
}
function Show() {
  return <App1 text={"useState hook"} />;
}
export default Show;
