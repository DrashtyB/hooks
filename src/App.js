import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AppContext from "./context";
import Callback from "./callback";
import Ref from "./ref";
import Show from "./state";
import Effect from "./Effect";
import TodoReducer from "./TodoReducer";
import Memo from "./Memo";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 25
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/useState">useState</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
          <li>
            <Link to="/useContext">useContext</Link>
          </li>
          <li>
            <Link to="/useReducer">useReducer</Link>
          </li>
          <li>
            <Link to="/useCallback">useCallback</Link>
          </li>
          <li>
            <Link to="/useMemo">useMemo</Link>
          </li>
          <li>
            <Link to="/useRef">useRef</Link>
          </li>
          <li>
            <Link to="/useImperativeHandle">useImperativeHandle</Link>
          </li>
          <li>
            <Link to="/useLayoutEffect">useLayoutEffect</Link>
          </li>
        </ul>
        <hr />
        <div className={classes.root}>
          <Switch>
            <Route path="/useState" component={Show} />
            <Route path="/useEffect" component={Effect} />
            <Route path="/useContext" component={AppContext} />
            <Route path="/useReducer" component={TodoReducer} />
            <Route path="/useCallback" component={Callback} />
            <Route path="/useMemo" component={Memo} />
            <Route path="/useRef" component={Ref} />
            <Route path="/useImperativeHandle" component={Ref} />
            <Route path="/useLayoutEffect" component={Effect} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
