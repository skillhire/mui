import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

const Label = ({
	label,
	color = 'primary',
	className,
	...rest
}) => {
	const classes = useStyles()

	return (
		<span
			className={clsx(classes.label, className)}
			size="small"
			color={color}
		>
			{label}
		</span>
	)
}

Label.propTypes = {
	label: PropTypes.string,
	color: PropTypes.string,
	className: PropTypes.string,
}

export default Label

const useStyles = makeStyles((theme) => ({
	label: {
		height: 20,
		fontSize: 11,
		borderRadius: 4,
		fontWeight: theme.typography.body3.fontWeight,
		fontFamily: theme.typography.body3.fontFamily,
		padding: theme.spacing(0.5, 1),
		marginRight: theme.spacing(0.5),
		color: theme.palette.text.secondary,
		textTransform: 'uppercase',
		backgroundColor: theme.palette.common.gradient,
	},
}))
