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
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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
  AppPaper: {
    backgroundColor: "",
    margin: "9px auto",
    height: "97vh",
    width: "100vh",
    border: "1.4px solid #f06060"
  },
  headerTitle: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    fontSize: "2.5em !important",
    marginTop: "8px"
  },
  imgLove: {
    height: "8vh"
  },
  mainNav: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0"
  },
  buttonNav: {
    margin: "0 40px"
  }
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} className={classes.AppPaper} justify={"center"}>
        <Grid container>
          <Grid item xs={12}>
            <header className={classes.headerTitle}>
              <Typography variant="h1" className={classes.title}>
                React + Electron ={" "}
              </Typography>
              <img src={loveImg} className={classes.imgLove} />
            </header>
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
                        Metronome
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
                        SystemSpec
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
      </Paper>
    </ThemeProvider>
  );
}

export default App;