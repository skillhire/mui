import React, {
	useState,
	useEffect,
	useContext,
} from 'react'
import AppContext from '../context/AppContext'
import { useAlerts } from '../hooks'
import {
	Fade,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Paper,
	Slide,
	Box,
	Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import {
	Clear,
} from '@mui/icons-material'

const Alert = () => {
	const classes = useStyles()
	const [open, setOpen] = useState(false)

	const { alert, setAlert } = useContext(AppContext)

	const handleClose = () => {
		setOpen(false)
		setAlert()
	}

	useEffect(() => {
		if (alert && alert?.message) {
			setOpen(true)
		}
	}, [alert])

	useEffect(() => {
		if (open) setTimeout(() => setOpen(false), 2500)
	}, [open])

	return (
		<Fade in={open}>
			<Slide direction="down" in={open}>
				<Box width="100%" p={2} className={classes.root}>
					<Paper elevation={4} className={classes.alert}>
						<List disablePadding>
							<ListItem button onClick={handleClose}>
								<ListItemText
									primary={
										<Typography
											variant="body1"
											className={classes.text}
										>
											{alert?.message || ''}
										</Typography>
									}
								/>
							</ListItem>
							<ListItemSecondaryAction>
								<IconButton
									size="small"
									onClick={handleClose}
								>
									<Clear className={classes.icon} />
								</IconButton>
							</ListItemSecondaryAction>
						</List>
					</Paper>
				</Box>
			</Slide>
		</Fade>
	)
}

export default Alert

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		zIndex: 2000,
		width: '100%',
		top: 0,
		left: 0,
	},
	alert: {
		maxWidth: 500,
		margin: '0 auto',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	text: {
		color: theme.palette.common.white,
	},
	icon: {
		color: theme.palette.common.white,
	},
}))
