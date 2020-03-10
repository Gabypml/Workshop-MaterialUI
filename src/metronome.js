import React, { useState } from "react";
import useInterval from "./useInterval";


import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";


import soundFile1 from "./assets/click1.wav";
import soundFile2 from "./assets/click2.wav";
import play from "./assets/play.png";
import pause from "./assets/pause.png";



const Metronome = () => {
  const [beat, setBeat] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [measure, setMeasure] = useState({
    count: 0,
    pulse: 4
  });

  const click1 = new Audio(soundFile1);
  const click2 = new Audio(soundFile2);

  const handleSlider = e => {
    setMeasure({ count: 0, pulse: measure.pulse });
    setBeat(+e.target.value);
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

  return (
    <div>
      <h3>{beat} BPM</h3>
      <div>
        <button onClick={handleMinus}>-</button>
        <input
          type="range"
          min="60"
          max="240"
          value={beat}
          onChange={handleSlider}
        />
        <button onClick={handlePlus}>+</button>
      </div>
      <button onClick={startStop}>
        <img src={playing ? pause : play} alt="play/pause"></img>
      </button>
      <div>
        <h4>Mesure : </h4>
        <MuiThemeProvider theme={theme}>
          <Button color="primary"
            onClick={e => {
              handlePulse(e, 2);
            }}
          >
            2
          </Button>
          <Button
            onClick={e => {
              handlePulse(e, 3);
            }}
          >
            3
          </Button>
          <Button
            className="active"
            onClick={e => {
              handlePulse(e, 4);
            }}
          >
            4
          </Button>
        </MuiThemeProvider>
      </div>
    </div>
  );
};
const theme = createMuiTheme({
  palette:{
    primary: blue
  },
  typography:{
    fontSize: 20,
    fontFamily: "Arial, Helvetica"
  },
  overrides:{
    MuiButton:{
      root:{
        backgroundColor: "red"
      }
    }
  }
})

export default Metronome;
