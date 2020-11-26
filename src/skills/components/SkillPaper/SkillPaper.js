import React from 'react';

import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '1.25rem',
  }
});

export function SkillPaper(props) {
  const { firstUsed, lastUsed, level, title } = props;
  const classes = useStyles();

  return (
    <Paper className={ classes.root } elevation={ 3 }>
      <Typography variant='h6'>{ title }</Typography>
      <br />
      <Typography variant='body1'><strong>Last used:</strong> { lastUsed }</Typography>
      <Typography variant='body1'><strong>Duration:</strong> { lastUsed - firstUsed + 1 }</Typography>
      <Rating readOnly value={ level / 20 } />
    </Paper>
  );
}

SkillPaper.defaultProps = {
  firstUsed: 0,
  lastUsed: 0,
  level: 0,
  title: ''
};
