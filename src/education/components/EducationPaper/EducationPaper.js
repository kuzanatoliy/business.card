import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '2rem',
  }
});

export function EducationPaper(props) {
  const { title, faculty, degree, specialty, startYear, endYear } = props;
  const classes = useStyles();

  return (
    <Paper className={ classes.root } elevation={ 3 }>
      <Typography variant='h6'>{ title } ({ startYear } - { endYear })</Typography>
      <br />
      <Typography variant='body1'><strong>Faculty:</strong> { faculty }</Typography>
      <Typography variant='body1'><strong>Degree:</strong> { degree }</Typography>
      <Typography variant='body1'><strong>Specialty:</strong> { specialty }</Typography>
    </Paper>
  );
}

EducationPaper.defaultProps = {
  title: '-',
  faculty: '-',
  degree: '-',
  specialty: '-',
  startYear: 0,
  endYear: 0
}
