import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ButtonLoader from './ButtonLoader'
import ProgressLoader from './ProgressLoader'
import Placeholder from './Placeholder'
import Modal from './Modal'
import { AlertCircle } from 'react-feather'

const DeleteWarningModal = ({
	isLoading,
	title = 'Are you sure?',
	subtitle = 'Please confirm or cancel this action.',
	open,
	onClose,
	onConfirm,
}) => {
	const classes = useStyles()
	return (
		<Modal
			open={open}
			title="Are you sure?"
			actions={
				<Button
					color="secondary"
					onClick={onConfirm}
					startIcon={isLoading && <ButtonLoader />}
				>
					Confirm
				</Button>
			}
			handleClose={onClose}
		>
			{!isLoading ? (
				<Placeholder
					icon={<AlertCircle className={classes.icon} />}
					title={title}
					subtitle={subtitle}
				/>
			) : (
				<div className={classes.content}>
					<ProgressLoader />
				</div>
			)}
		</Modal>
	)
}

DeleteWarningModal.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onConfirm: PropTypes.func.isRequired,
}

export default DeleteWarningModal

const useStyles = makeStyles((theme) => ({
	content: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		color: theme.palette.secondary.main,
		height: 32,
		width: 32,
	},
}))
