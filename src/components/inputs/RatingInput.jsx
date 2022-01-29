import React from 'react'
import { alpha, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Rating from '@mui/material/Rating'

const RatingInput = ({
	label,
	value,
	name,
	handleChange,
	readOnly = false,
	size,
	...props
}) => {
	const classes = useStyles()

	const onChange = (event, value) => {
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<div className={classes.root}>
			{label && (
				<Typography variant="caption" color="secondary">
					{label}
				</Typography>
			)}
			<div className={classes.input}>
				<Rating
					name={name}
					readOnly={readOnly}
					className={classes.rating}
					onChange={onChange}
					size={size}
					value={parseInt(value)}
				/>
			</div>
		</div>
	)
}

export default RatingInput

const useStyles = makeStyles((theme) => ({
	input: {
		padding: theme.spacing(1, 2, 0.5, 2),
		backgroundColor: theme.palette.common.white,
		borderRadius: 4,
		border: `1px solid ${theme.palette.common.inputBorder}`,
		boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
		fontSize: 15,
		'&:focus': {
			boxShadow: `${alpha('#999999', 0.25)} 0 0 0 0.2rem`,
			borderColor: theme.palette.primary.light,
		},
	},
	rating: {
		color: theme.palette.primary.main,
	},
}))
