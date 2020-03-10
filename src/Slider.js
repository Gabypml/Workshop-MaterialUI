import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

const Metronome = () => {
    const [beat, setBeat] = useState(100);
    const [playing, setPlaying] = useState(false);
    const [measure, setMeasure] = useState({
      count: 0,
      pulse: 4
    });

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
}

// export default function ContinuousSlider() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(30);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider value={beat} aria-labelledby="continuous-slider" />
        </Grid>
      </Grid>
    </div>
  );
