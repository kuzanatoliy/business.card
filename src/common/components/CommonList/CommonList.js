import React from 'react';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export function CommonList(props) {
  const { variant, title, itemList } = props;

  const createListItem = item => (
    <ListItem key={ item }>
      <ListItemText>{ item }</ListItemText>
    </ListItem>
  );

  return (
    <>
      <Typography variant={ variant }>{ title }</Typography>
      <List>
        { itemList.map(item => createListItem(item)) }
      </List>
    </>
  );
}

CommonList.defaultProps = {
  itemList: [],
  title: '',
  variant: 'h6'
};
