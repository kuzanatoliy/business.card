import React, { Children, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useLocation } from 'react-router-dom';

import { useIndentStyles } from '../../hooks';

const useStyles = makeStyles({
  menuItem: {
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    }
  }
});

export function Header(props) {
  const classes = useStyles();
  const indentStyles = useIndentStyles();
  const location = useLocation();
  const [ anchorEl, setAnchorEl ] = useState(null);
  const children = Children.toArray(props.children);
  const activeElement = children.find(({ props }) => props.to === location.pathname);

  const menuOpenHandler = event => setAnchorEl(event.currentTarget);
  const menuCloseHandler = () => setAnchorEl(null);

  const createMenuItem = item => (
    <MenuItem
      className={ classes.menuItem }
      key={ item.props.to }
      onClick={ menuCloseHandler }
      children={ item }
      selected={ item === activeElement }
    />
  );

  return (
    <AppBar position='static'>
      <Toolbar variant='dense' className={ indentStyles.main }>
        <IconButton edge='start' color='inherit' aria-label='menu' onClick={ menuOpenHandler }>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={ anchorEl }
          open={ Boolean(anchorEl) }
          onClose={ menuCloseHandler }
        >
          <nav>{ children.map( createMenuItem ) }</nav>
        </Menu>
        <Typography variant='h6' color='inherit'>
          { activeElement ? activeElement.props.children : '' }
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
