import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  Typography,
  CardContent,
  IconButton
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}));

function Effect() {
  const classes = useStyles();
  const [display, setDisplay] = useState(true);

  useLayoutEffect(() => {
    console.log("useLayoutEffect:", display);
  }, [display]);

  useEffect(() => {
    console.log("useEffect onMount");
  }, []);

  useEffect(() => {
    console.log("useEffect onUpdate");
  },[]);

  useEffect(() => {
    console.log('clean')
    return () => {
      console.log("useEffect onUnMount");
    };
  });

  return (
    <div>
      <Card>
        <CardHeader>title="useEffect"</CardHeader>
        <div className={classes.root}>
          <CardContent>
            <Typography>React hooks</Typography>
            <IconButton onClick={() => setDisplay(!display)}>
              <ExpandMoreIcon />
            </IconButton>
            <CardContent>
            {display ? "useState, useEffect, useContext" : null}
            </CardContent>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default Effect;
