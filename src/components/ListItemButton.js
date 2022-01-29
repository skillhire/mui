import React, { useState } from 'react'
import {
	Avatar,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemSecondaryAction,
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const ListItemButton = ({
	onClick,
	image,
	icon: Icon,
	primary,
	secondary,
	secondaryAction,
}) => {
	const classes = useStyles()

	return (
		<ListItem
			button={onClick ? true : false}
			className={classes.listItem}
			onClick={onClick}
		>
			<ListItemIcon>
				{Icon && (
					<Avatar
						variant="rounded"
						className={classes.avatar}
					>
						<Icon className={classes.icon} />
					</Avatar>
				)}
				{image && (
					<img src={image} className={classes.image} />
				)}
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

export default ListItemButton

const useStyles = makeStyles((theme) => ({
	icon: {
		color: theme.palette.text.secondary,
	},
	avatar: {
		border: `2px solid ${theme.palette.common.white}`,
		backgroundColor: theme.palette.common.gradient,
	},
	image: {
		width: 32,
		height: 'auto',
	},
	listItem: {
		marginTop: theme.spacing(1),
		border: `1px solid ${theme.palette.common.white}`,
		backgroundColor: theme.palette.common.white,
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: `0px 0px 10px 0px ${theme.palette.common.border}`,
		},
	},
}))
