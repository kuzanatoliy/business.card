import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import { useIndentStyles, CommonList } from '../../../common';

const useStyles = makeStyles({
  root: {
    padding: '3rem',
  },
  paper: {
    padding: '2rem'
  }
});

export function SummaryPage() {
  const classes = useStyles();
  const indentClasses = useIndentStyles();

  return (
    <div className={ `${ indentClasses.main } ${ classes.root }` }>
      <Paper className={ classes.paper } elevation={ 3 }>
        <Typography variant='body1'>5+ years in IT. In my work, I have high productivity and a good understanding of the tasks. I have good motivation to improve my qualifications and professional skill. Also, I'm aimed at maximum team effectiveness.</Typography>
        <br />
        <CommonList
          title='Strength:'
          itemList={[
            'High productivity',
            'Well communication skill and cooperation',
            'Learning, ability to fast improve professional knowledge',
            'Develop experience on back-end and front-end sides'
          ]}
        />
        <CommonList
          title='Experience in:'
          itemList={[
            'database designing',
            'API designing',
            'integration 3rd party authentication',
            'clean code writing',
            'refactoring and optimization',
            'JavaScript development',
            'UI frameworks: AngularJS, React'
          ]}
        />
        <CommonList
          title='Roles:'
          itemList={[
            'Full-stack developer',
            'NodeJS developer',
            'Key developer'
          ]}
        />
        <CommonList
          title='Responsibilities:'
          itemList={[
            'UI development',
            'Back-end development',
            'Code review',
            'Handle the adaptation process for newcomers',
            'Codebase refactoring'
          ]}
        />
        <CommonList
          title='Priority skills:'
          itemList={[
            'NodeJS',
            'JavaScript'
          ]}
        />
      </Paper>
    </div>
  );
}
