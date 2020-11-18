import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import { useIndentStyles } from '../../../common';

const useStyles = makeStyles({
  avatar: {
    height: '50vh',
    width: '50vh',
  },
  container: {
    '& > div': {
      margin: '1rem 0'
    },
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center'
  }
});

export function HomePage() {
  const classes = useStyles();
  const indentClasses = useIndentStyles();

  return (
    <div className={ `${ classes.root } ${ indentClasses.useIndentStyles }` }>
      <div className={ `${ classes.container } ${ indentClasses.main }` }>
        <Avatar src='/images/avatar.jpg' className={ classes.avatar }/>
        <Typography variant='h3' color='primary' className={ classes.title }>Anatoli Kuzmiankou</Typography>
      </div>
    </div>
  );
}