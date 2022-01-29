import React from 'react'
import {
	Box,
	SwipeableDrawer,
	Typography,
  IconButton
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ChevronLeft } from 'react-feather'

const Drawer = ({
	open,
	title,
	anchor = 'right',
	subtitle,
	handleClose,
	children,
	width = 520,
	buttons,
	...props
}) => {
	const classes = useStyles({ width })

	return (
		<SwipeableDrawer
			open={open}
			variant="temporary"
			anchor={anchor}
			onOpen={handleClose}
			onClose={handleClose}
			classes={{ paper: classes.paper }}
		>
			<Box className={classes.container}>
				<div className={classes.header}>
					<div className={classes.iconBar}>
						<IconButton onClick={handleClose}>
							<ChevronLeft />
						</IconButton>
					</div>
					<div>
						<Typography
							color="textSecondary"
							variant="caption"
							className={classes.title}
						>
							{title}
						</Typography>
					</div>
					<div className={classes.iconBar}></div>
				</div>
				<div className={classes.content}>
					{children}
					<div className={classes.buttons}>{buttons}</div>
				</div>
			</Box>
		</SwipeableDrawer>
	)
}

export default Drawer

const useStyles = makeStyles((theme) => ({
	icon: {
		color: theme.palette.secondary.light,
	},
	header: {
		display: 'flex',
		flexDirecton: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 50,
		backgroundColor: theme.palette.background.main,
		borderBottom: `1px solid ${theme.palette.common.inputBorder}`,
		background: `linear-gradient(#fff, ${theme.palette.common.gradient})`,
	},
	button: {
		border: `1px solid ${theme.palette.common.inputBorder}`,
		boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
	},
	buttons: {
		margin: theme.spacing(2, 0),
	},
	paper: {
		zIndex: `90 !important`,
		backgroundColor: theme.palette.background.main,
	},
	title: {},
	iconBar: {
		width: 60,
	},
	container: {
		zIndex: `90 !important`,
		width: '100%',
		width: 540,
		maxWidth: (props) => props.width,
		[theme.breakpoints.down('sm')]: {
			width: '100vw',
		},
	},
	content: {
		padding: theme.spacing(2),
	},
}))
