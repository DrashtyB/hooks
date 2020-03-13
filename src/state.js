import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

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
      <div>
        <p>"useState & useEffect demo"</p>
        {display ? `${text.substr(0, 0)}` : text}
        <br />
        <button onClick={() => setDisplay(!display)}>
          {display ? "Show" : "Hide"}
        </button>
      </div>
    </div>
  );
}
function Show() {
  return <App1 text={"useState hook"} />;
}
export default Show;
