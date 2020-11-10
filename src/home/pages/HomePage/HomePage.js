import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    width: '50vh',
    height: '50vh'
  }
});

export function HomePage() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <div className={ classes.container }>
        <Avatar src='/images/avatar.jpg' className={ classes.avatar }/>
        <Typography variant='h3' color='primary'>Anatoli Kuzmiankou</Typography>
      </div>
    </div>
  );
}