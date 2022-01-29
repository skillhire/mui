import React from 'react'
import { Badge, colors } from '@mui/material'
import { makeStyles } from '@mui/styles'

const OnlineStatusBadge = ({
	online = 'true',
	children,
	...props
}) => {
	const classes = useStyles()

	return (
		<Badge
			{...props}
			variant="dot"
			classes={{
				dot:
					online === 'false'
						? classes.offline
						: classes.online,
			}}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			color="secondary"
		>
			{children && children}
		</Badge>
	)
}

export default OnlineStatusBadge

const useStyles = makeStyles((theme) => ({
	online: {
		height: 8,
		width: 8,
		backgroundColor: colors.green[500],
	},
	offline: {
		height: 8,
		width: 8,
		backgroundColor: colors.purple[500],
	},
}))
