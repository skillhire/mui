import React, { useState } from 'react'
import {
	FormControl,
	InputBase,
	Typography,
} from '@mui/material'
import moment from 'moment'
import { useStyles } from './inputs/TextInput/styles'

const DatePicker = ({
	required,
	label,
	name,
	value,
	handleChange,
	placeholder,
	onKeyPress,
	...props
}) => {
	const [error, setError] = useState(false)
	const classes = useStyles()

	const handleInputChange = (ev) => {
		let { name, value } = ev.target
		required && value === ''
			? setError(true)
			: setError(false)
		handleChange(ev)
	}

	let selectedDate = moment(value).format('yyyy-MM-DD')

	return (
		<FormControl fullWidth>
			<Typography variant="caption" color="textSecondary">
				{label}
			</Typography>
			<InputBase
				error={error}
				autoComplete="off"
				fullWidth
				type="date"
				name={name}
				className={classes.inputBase}
				placeholder={placeholder}
				margin="dense"
				onKeyPress={onKeyPress}
				variant="outlined"
				onChange={handleInputChange}
				value={selectedDate}
			/>
		</FormControl>
	)
}

export default DatePicker
