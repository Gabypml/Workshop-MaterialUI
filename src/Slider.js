import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider value={beat} aria-labelledby="continuous-slider" />
        </Grid>
      </Grid>
    </div>
  );