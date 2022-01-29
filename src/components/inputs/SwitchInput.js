import React from 'react'
import {
	alpha,
	Switch,
	Typography,
	FormControlLabel,
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const SwitchInput = ({
	name,
	value,
	label,
	placeholder,
	handleChange,
}) => {
	const classes = useStyles()

	return (
		<div>
			<div>
				<Typography variant="caption" color="secondary">
					{label}
				</Typography>
			</div>
			<div className={classes.input}>
				<FormControlLabel
					control={
						<Switch
							name={name}
							checked={value}
							onChange={handleChange}
							value="true"
						/>
					}
					label={
						<Typography
							variant="body1"
							color="textSecondary"
						>
							{placeholder}
						</Typography>
					}
				/>
			</div>
		</div>
	)
}

export default SwitchInput

const useStyles = makeStyles((theme) => ({
	input: {
		display: 'flex',
		direction: 'column',
		borderRadius: 4,
		padding: theme.spacing(0.5, 2, 0.5, 2),
		backgroundColor: theme.palette.common.white,
		border: `1px solid ${theme.palette.common.inputBorder}`,
		boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
		fontSize: 15,
		'&:focus': {
			boxShadow: `${alpha('#999999', 0.25)} 0 0 0 0.2rem`,
			borderColor: theme.palette.primary.light,
		},
	},
}))
