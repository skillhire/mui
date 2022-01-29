import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

const ButtonIcon = ({
	onClick,
	icon: Icon,
	className,
	size = 24,
	disabled = false,
	...props
}) => {
	const classes = useStyles({ size, disabled })

	return (
		<div className={classes.root}>
			<IconButton
				className={clsx(classes.button, className)}
				onClick={onClick}
				disabled={disabled}
			>
				<Icon className={classes.icon} />
			</IconButton>
		</div>
	)
}

ButtonIcon.propTypes = {
	icon: PropTypes.object.isRequired,
	handleClick: PropTypes.func,
}

export default ButtonIcon

const useStyles = makeStyles((theme) => ({
	icon: {
		color: (props) =>
			props.disabled
				? theme.palette.common.grey
				: theme.palette.text.secondary,
		height: (props) => props.size,
		width: (props) => props.size,
	},
	button: {
		padding: 12,
		backgroundColor: theme.palette.common.white,
		transition: theme.transitions.create([
			'border-color',
			'box-shadow',
		]),
		'&:hover': {
			backgroundColor: theme.palette.common.white,
		},
	},
}))
