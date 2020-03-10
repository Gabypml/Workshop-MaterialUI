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
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Grid, Link as LinkUI } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import SystemSpecs from "./SystemSpec";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d45d79"
    },
    secondary: {
      main: "#3D3D93"
    }
  }
});

const useStyles = makeStyles({
  headerTitle: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    fontSize: "2.5rem !important",
    marginTop: "8px",
    width: "auto"
  },
  imgLove: {
    height: "8vh",
    width: "auto"
  },
  mainNav: {
    display: "flex",
    justifyContent: "space-around",
    margin: "120px 0"
  },
  buttonNav: {
    width: "30vw",
    height: "50vh",
    display: "block"
  }
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12}>
          <AppBar color={"secondary"} className={classes.headerTitle}>
            <Toolbar>
              <Typography variant="h1" className={classes.title}>
                React + Electron ={" "}
              </Typography>
              <img src={loveImg} className={classes.imgLove} />
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <main>
            <Router>
              <nav className={classes.mainNav}>
                <Grid item xs={3}>
                  <Button
                    variant={"outlined"}
                    color={"primary"}
                    className={classes.buttonNav}
                  >
                    <Link to="/metronome">
                      <LinkUI>Metronome</LinkUI>
                      <img src={metronomeImg} />
                    </Link>
                  </Button>
                </Grid>

                <Grid item xs={3}>
                  <Button
                    variant={"outlined"}
                    color={"primary"}
                    className={classes.buttonNav}
                  >
                    <Link to="/systemspec">
                      <LinkUI>SystemSpec</LinkUI>
                      <img src={systemeImg} alt={"HEY"} />
                    </Link>
                  </Button>
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
    </ThemeProvider>
  );
}

export default App;