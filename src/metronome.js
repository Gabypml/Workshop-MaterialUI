import React, { useState } from "react";
import useInterval from "./useInterval";

import soundFile1 from "./assets/click1.wav";
import soundFile2 from "./assets/click2.wav";
import play from "./assets/play.png";
import pause from "./assets/pause.png";

import {makeStyles} from "@material-ui/styles";
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton'
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

const Metronome = () => {
  const [beat, setBeat] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [measure, setMeasure] = useState({
    count: 0,
    pulse: 4
  });

  const click1 = new Audio(soundFile1);
  const click2 = new Audio(soundFile2);

  const handleSlider = (e,newValue) => {
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
      width: "400px",
      color: "#d45d79"
    },
    Buttons: {
      color: "#d45d79"
    }
  })

  const classes = useStyles()

  return (
    <div>
      <h3>{beat} BPM</h3>
      <div>
        <IconButton className={classes.Buttons} aria-label="remove" onClick={handleMinus}>
          <RemoveCircleOutline/>
        </IconButton>
        <Slider 
          className={classes.Slider}
          valueLabelDisplay="auto"
          value={beat}
          min={0}
          max={240}
          onChange={handleSlider} 
          aria-labelledby="input-slider" />
        <IconButton className={classes.Buttons} aria-label="add" onClick={handlePlus}>
          <AddCircleOutline/>
        </IconButton>
      </div>
      <button onClick={startStop}>
        <img src={playing ? pause : play} alt="play/pause"></img>
      </button>
      <div>
        <h4>Mesure : </h4>
        <button
          onClick={e => {
            handlePulse(e, 2);
          }}
        >
          2
        </button>
        <button
          onClick={e => {
            handlePulse(e, 3);
          }}
        >
          3
        </button>
        <button
          onClick={e => {
            handlePulse(e, 4);
          }}
        >
          4
        </button>
      </div>
    </div>
  );
};

export default Metronome;
