import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import { useIndentStyles } from '../../hooks';

const useStyles = makeStyles({
  root: {
    margin: '0.5rem'
  }
});

export function Footer() {
  const classes = useStyles();
  const indentClasses = useIndentStyles();

  return (
    <Typography className={ `${ classes.root } ${ indentClasses.main }` } align='center' display='block'>
      ©2020 Kuzmiankou Anatoli
    </Typography>
  );
}
