import React from 'react'
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
	Slide,
	IconButton,
} from '@mui/material'
import useResponsive from '../hooks/useResponsive'
import { makeStyles } from '@mui/styles'
import { Close } from '@mui/icons-material'

const Modal = ({
	open,
	handleClose,
	icon,
	title,
	subtitle,
	actions,
	children,
	maxWidth,
	secondaryActions,
	p = 2,
	fullScreen,
}) => {
	const classes = useStyles({ p })
	const { isMobile } = useResponsive()

	return (
		<Dialog
			className={classes.root}
			fullWidth
			maxWidth={maxWidth || 'sm'}
			fullScreen={
				isMobile || fullScreen === true ? true : false
			}
			open={open}
			onClose={handleClose}
			transition={Slide}
		>
			<DialogTitle
				className={classes.dialogTitle}
				onClose={handleClose}
			>
				<Box display="flex" justifyContent="space-between">
					<Box display="flex" flexDirection="row">
						<Typography
							variant="caption"
							color="secondary"
							className={classes.title}
						>
							{title}
						</Typography>
					</Box>
					<div className={classes.secondaryActions}>
						{secondaryActions && secondaryActions}
						<IconButton
							className={classes.closeButton}
							onClick={handleClose}
						>
							<Close />
						</IconButton>
					</div>
				</Box>
			</DialogTitle>
			<DialogContent className={classes.dialogContent}>
				{subtitle && (
					<Typography variant="body1">
						{subtitle}
					</Typography>
				)}
				<div>{children}</div>
			</DialogContent>
			<DialogActions className={classes.dialogActions}>
				<Button
					onClick={handleClose}
					color="secondary"
					className={classes.button}
				>
					Cancel
				</Button>
				{actions}
			</DialogActions>
		</Dialog>
	)
}

export default Modal

const useStyles = makeStyles((theme) => ({
	root: {},
	title: {
		marginTop: theme.spacing(1),
	},
	dialogTitle: {
		color: theme.palette.text.primary,
		padding: theme.spacing(1, 1.5, 1, 2),
		width: '100%',
		backgroundColor: theme.palette.common.white,
		borderBottom: `1px solid ${theme.palette.common.border}`,
		background: `linear-gradient(#fff, ${theme.palette.common.gradient})`,
	},
	dialogContent: {
		backgroundColor: theme.palette.background.main,
		padding: (props) => theme.spacing(props.p),
	},
	dialogActions: {
		backgroundColor: theme.palette.background.main,
	},
	secondaryActions: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	closeButton: {
		color: theme.palette.secondary.main,
	},
}))
