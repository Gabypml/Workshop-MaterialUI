import React, { useState } from "react";
import useInterval from "./useInterval";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { sizing } from "@material-ui/system";
import blue from "@material-ui/core/colors/blue";

import soundFile1 from "./assets/click1.wav";
import soundFile2 from "./assets/click2.wav";
import play from "./assets/play.png";
import pause from "./assets/pause.png";

import { makeStyles } from "@material-ui/styles";
import Slider from "@material-ui/core/Slider";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleOutline from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import LightBlue from "@material-ui/core/colors/lightBlue";
import { lightBlue } from "@material-ui/core/colors";

const Metronome = () => {
  const [beat, setBeat] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [measure, setMeasure] = useState({
    count: 0,
    pulse: 4
  });

  const click1 = new Audio(soundFile1);
  const click2 = new Audio(soundFile2);

  const handleSlider = (e, newValue) => {
    setMeasure({ count: 0, pulse: measure.pulse });
    setBeat(newValue);
  };
  const handleMinus = () => {
    setMeasure({ count: 0, pulse: measure.pulse });
    setBeat(beat - 1);
  };
  const handlePlus = () => {
    setMeasure({ count: 0, pulse: measure.pulse });
    setBeat(beat + 1);
  };

  const handlePulse = (e, pulse) => {
    document
      .querySelectorAll("button.active")
      .forEach(button => button.classList.remove("active"));
    e.target.classList.add("active");
    setMeasure({ count: 0, pulse: pulse });
  };

  const startStop = () => {
    if (!playing) {
      setMeasure({ count: 0, pulse: measure.pulse });
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };

  const playClick = () => {
    if (measure.count % measure.pulse === 0) {
      click1.currentTime = 0;
      click1.play();
    } else {
      click2.currentTime = 0;
      click2.play();
    }
    setMeasure({
      count: (measure.count + 1) % measure.pulse,
      pulse: measure.pulse
    });
  };

  useInterval(() => {
    if (playing) {
      playClick();
    }
  }, 60000 / beat);

  const useStyles = makeStyles({
    Slider: {
      width: "280px",
      color: "#3D3D93",
      margin: "0 10px 0 10px"
    },
    Buttons: {
      color: lightBlue[300], 
      display: "inline-block"
    },
    playButton: {
      height: "70px",
      width: "70px"
    }
  });

  const classes = useStyles();

  return (
    <div>
      <h3>{beat} BPM</h3>
      <div>
        <IconButton
          className={classes.Buttons}
          aria-label="remove"
          onClick={handleMinus}
        >
          <RemoveCircleOutline />
        </IconButton>
        <Slider
          className={classes.Slider}
          valueLabelDisplay="auto"
          value={beat}
          min={0}
          max={240}
          onChange={handleSlider}
          aria-labelledby="input-slider"
        />
        <IconButton
          className={classes.Buttons}
          aria-label="add"
          onClick={handlePlus}
        >
          <AddCircleOutline />
        </IconButton>
      </div>
      <Button onClick={startStop}>
        <img
          src={playing ? pause : play}
          className={classes.playButton}
          alt="play/pause"
        />
      </Button>
      <div>
        <h4>Mesure : </h4>

        <MuiThemeProvider theme={theme}>
          <ButtonGroup>
            <Button
              color="primary"
              onClick={e => {
                handlePulse(e, 2);
              }}
            >
              DEUX
            </Button>
            <Button
              color="primary"
              onClick={e => {
                handlePulse(e, 3);
              }}
            >
              TROIS
            </Button>
            <Button
              color="primary"
              className="active"
              onClick={e => {
                handlePulse(e, 4);
              }}
            >
              QUATRE
            </Button>
          </ButtonGroup>
        </MuiThemeProvider>
      </div>
    </div>
  );
};
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8B0000"
    },
    secondary: {
      main: "#3D3D93"
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: "Arial, Helvetica"
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: "#d45d79"
      }
    }
  }
});

export default Metronome;
