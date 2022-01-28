import React from 'react';
import { Button } from '@mui/material'

const MuiButton = ({ label="Hello, World" }) => (
  <Button
    color="primary"
    variant='contained'        
  >
    {label}
  </Button>
)

export default MuiButton
