import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Link,
  useRouteMatch
} from "react-router-dom";
import "./css/App.min.css";
import Metronome from "./metronome";

import metronomeImg from "./assets/metronome.svg";
import systemeImg from "./assets/systeme.svg";
import loveImg from "./assets/love.svg";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

function App() {
  return (
    <Paper
      elevation={"3"}
      style={{ backgroundColor: "#ccc", marginTop: "10px" }}
    >
      <Grid container>
        <Grid item xs={"12"}>
          <header>
            <h1>
              React + Electron = <img src={loveImg} />
            </h1>
          </header>
        </Grid>
        <Grid item xs={"12"}>
          <main>
            <Router>
              <nav className="navbar">
                <Grid item xs={"3"} className="container-link">
                  <Link className="nav-link" to="/metronome">
                    Metronome
                    <img src={metronomeImg} />
                  </Link>
                </Grid>
                <Grid item xs={"3"} className="container-link">
                  <Link className="nav-link" to="/systemespecs">
                    Systemespecs
                    <img src={systemeImg} />
                  </Link>
                </Grid>
              </nav>
              <Route path="/metronome">
                <Metronome />
              </Route>
            </Router>
          </main>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
