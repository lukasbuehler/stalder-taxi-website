import Home from "./pages/Home";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <AppBar position="static" color="default" elevation={1}>
          <Toolbar className={"toolbar"}>
            <div className={"toolbarDiv"}>
              <Typography variant="h6" color="inherit" noWrap>
                Stalder Taxi-Service
              </Typography>
              <nav className={"navbar"}>
                <Button variant="text" color="primary" href="/" className={"navToolbarButton"}>
                  Home
                </Button>
                <Button variant="text" color="primary" href="/fleet" className={"navToolbarButton"}>
                  Flotte
                </Button>
                <Button variant="text" color="primary" href="/about" className={"navToolbarButton"}>
                  Über uns
                </Button>
              </nav>
            </div>
            <Button className={"navLoginButton"} href="#" color="primary" variant="outlined">
              Login
            </Button>
          </Toolbar>
        </AppBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/fleet">
            <Fleet />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>Über uns</h2>;
}

function Fleet() {
  return <h2>Unsere Flotte</h2>;
}
