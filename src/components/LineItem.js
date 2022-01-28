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
	size = 24,
	color = 'textSecondary',
	disablePadding = false,
	secondaryAction,
	onClick,
}) => {
	const classes = useStyles({
		size,
		color,
	})

	return (
		<ListItem
			button={onClick ? true : false}
			disableGutters
			disablePadding={disablePadding}
			onClick={onClick ? onClick : null}
		>
			<ListItemIcon>
				{Icon && <Icon className={classes.icon} />}
			</ListItemIcon>
			<ListItemText
				primary={primary}
				secondary={secondary}
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
	icon: {
		height: (props) => props.size,
		width: (props) => props.size,
		marginLeft: theme.spacing(1),
		color: (props) =>
			props.color == 'primary'
				? theme.palette.primary.main
				: theme.palette.text.secondary,
	},
}))
