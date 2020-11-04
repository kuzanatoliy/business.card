import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    margin: '0.5rem'
  }
});

export function Footer() {
  const classes = useStyles();

  return (
    <Typography className={ classes.root } align='center' display='block'>
      ©2020 Kuzmiankou Anatoli
    </Typography>
  );
}
