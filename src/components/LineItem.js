import React from 'react'
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemSecondaryAction,
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const LineItem = ({
	icon: Icon,
	primary,
	secondary,
	disablePadding = false,
	secondaryAction,
	onClick,
}) => {
	const classes = useStyles()

	return (
		<ListItem
			button={onClick ? true : false}
			disableGutters
			disablePadding={disablePadding}
			onClick={onClick ? onClick : null}
		>
			<ListItemText
				primary={primary}
				secondary={"Subtitle"}
			/>
			{secondaryAction && (
				<ListItemSecondaryAction>
					{secondaryAction}
				</ListItemSecondaryAction>
			)}
		</ListItem>
	)
}

export default LineItem

const useStyles = makeStyles((theme) => ({
	root: {}
}))
