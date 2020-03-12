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
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import SystemSpecs from "./SystemSpec";
import Box from "@material-ui/core/Box";

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
    width: "99%",
    margin: "0 7px 0 0"
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
    margin: "auto"
  },
  buttonNav: {
    width: "250px",
    height: "30vh",
    margin: "35px auto",
    borderRadius: "48px",
    background: "linear-gradient(180deg, #41419d, #373784)",
    boxShadow: "-12px 12px 24px #232355,12px -12px 24px #5757d1"
  },
  imgButton: {
    display: "block"
  },
  PaperApp: {
    color: "#ddd",
    width: "99vw",
    height: "97vh",
    margin: "10px auto",
    backgroundColor: "#2e344c"
  },
  mainApp: {
    display: "flex",
    justifyContent: "center",
    marginTop: "80px",
    height: "80vh"
  },
  paperNav: {
    borderRadius: "30px",
    backgroundColor: "#3D3D93",
    marginRight: "50px",
    minWidth: "300px",
    width: "25vw"
  },
  paperDisplay: {
    backgroundColor: "#3D3D93",
    marginLeft: "50px",
    minWidth: "300px",
    borderRadius: "30px",

    width: "25vw"
  },
  center: {
    display: "flex"
  }
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.PaperApp}>
        <Grid container>
          <Grid item>
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
            <main className={classes.mainApp}>
              <Router>
                <Paper className={classes.paperNav} elevation={3}>
                  <nav className={classes.mainNav}>
                    <Grid item>
                      <Box component={"div"} display={"flex"}>
                        <Button
                          variant={"outlined"}
                          color={"primary"}
                          className={classes.buttonNav}
                          justify={"center"}
                        >
                          <Link to="/metronome">
                            <Typography color={"primary"}>Metronome</Typography>
                            <img
                              src={metronomeImg}
                              className={classes.imgButton}
                            />
                          </Link>
                        </Button>
                      </Box>
                    </Grid>

                    <Grid item display={"flex"}>
                      <Button
                        variant={"outlined"}
                        color={"primary"}
                        className={classes.buttonNav}
                        justify={"center"}
                      >
                        <Link to="/systemspec">
                          <Typography color={"primary"}>SystemSpec</Typography>
                          <img
                            src={systemeImg}
                            alt={"HEY"}
                            className={classes.imgButton}
                          />
                        </Link>
                      </Button>
                    </Grid>
                  </nav>
                </Paper>
                <Paper className={classes.paperDisplay}>
                  <Route path="/metronome">
                    <Metronome />
                  </Route>
                  <Route path={"/systemspec"}>
                    <SystemSpecs />
                  </Route>
                </Paper>
              </Router>
            </main>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
