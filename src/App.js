import React, { useState } from "react";
import AppReducer from "./reducer";
import { makeStyles } from "@material-ui/core";
import AppContext from "./context";
import Callback from "./callback";
import Ref from "./ref";
import Memo from "./usememo";
import Effect from "./effect";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 20,
    marginTop: 10
  }
}));
function App({ text }) {
  const classes = useStyles();
  const [display, setDisplay] = useState(true);

  return (
    <div className={classes.root}>
      <div>
        <p>"useState & useEffect demo"</p>
        {display ? `${text.substr(0, 0)}` : text}
        <br />
        <button onClick={() => setDisplay(!display)}>
          {display ? "Show" : "Hide"}
        </button>
      </div>
      <Effect/>
      <AppReducer />
      <AppContext />
      <Callback />
      <Ref />
      <Memo />
    </div>
  );
}

function Show() {
  return <App text={"useState hook"} />;
}
export default Show;
