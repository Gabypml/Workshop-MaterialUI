import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Link,
  useRouteMatch
} from "react-router-dom";
import Metronome from "./metronome";

import metronomeImg from "./assets/metronome.svg";
import systemeImg from "./assets/systeme.svg";
import loveImg from "./assets/love.svg";

import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SystemSpecs from "./SystemSpec";

const useStyles = makeStyles({
  AppPaper: {
    backgroundColor: "#ccc",
    margin: "9px 0",
    height: "97vh",
    border: "1.4px solid #f06060"
  },
  title: {
    fontSize: "2.5rem"
  }
});

function App() {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.AppPaper}>
      <Grid container>
        <Grid item xs={12}>
          <header>
            <Typography variant="h1" className={classes.title}>
              React + Electron = <img src={loveImg} />
            </Typography>
          </header>
        </Grid>
        <Grid item xs={12}>
          <main>
            <Router>
              <nav>
                <Grid item xs={3}>
                  <Link to="/metronome">
                    Metronome
                    <img src={metronomeImg} />
                  </Link>
                </Grid>
              </nav>
              <nav>
                <Grid item xs={3}>
                  <Link to="/systemspec">
                    SystemSpec
                    <img src={systemeImg} alt={"HEY"} />
                  </Link>
                </Grid>
              </nav>
              <Route path="/metronome">
                <Metronome />
              </Route>
              <Route path={"/systemspec"}>
                <SystemSpecs />
              </Route>
            </Router>
          </main>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
