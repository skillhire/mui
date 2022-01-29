import React from 'react'
import {
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const LineItem = ({ label, value, ...rest }) => {
	return (
		<ListItem>
			<ListItemText
				primary={
					<Typography variant="body2">{label}</Typography>
				}
				secondary={
					<Typography variant="body1">
						{value ? value : '-'}
					</Typography>
				}
			/>
		</ListItem>
	)
}

export default LineItem
