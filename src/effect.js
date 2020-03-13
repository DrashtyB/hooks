import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  Typography,
  CardContent,
  IconButton,
  CardMedia,
  CardActions
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import TodoReducer from "./TodoReducer";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 310,
    margin: 20
  },
  content: {
    display: "flex"
  },
  action: {
    marginLeft: "auto"
  }
}));
function Effect() {
  const classes = useStyles();
  const [display, setDisplay] = useState(true);
  
  useLayoutEffect(() => {
    console.log("useLayoutEffect called");
  }, [display]);

  useEffect(() => {
    console.log("useEffect onMount called");
    return () => {
      console.log("useEffect onUnMount called");
    };
  });

  useEffect(() => {
    console.log("useEffect onUpdate called");
  }, []);

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title="useEffect" />
        <CardMedia
          component="img"
          image="https://placekitten.com/640/360"
          title="placeKitten"
        />
        <CardActions disableSpacing>
          <Typography>React hooks</Typography>
          <IconButton
            edge="end"
            onClick={() => setDisplay(!display)}
            className={classes.action}
          >
            <ExpandLessIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          {display ? "useState, useEffect, useContext" : null}
        </CardContent>
      </Card>
      <TodoReducer />
    </div>
  );
}

export default Effect;
