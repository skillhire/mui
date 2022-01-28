import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material'

const Label = ({ label="Hello, World" }) => (
  <List>
    <ListItem>
      <ListItemText primary={ label } />
    </ListItem>
  </List>
)

export default Label
