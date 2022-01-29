import React, { useState, useEffect } from 'react'
import { Chip, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Autocomplete from '@mui/material/Autocomplete'

const MultiAutosuggest = ({
	value,
	options,
	label,
	name,
	placeholder = 'Select',
	handleChange,
	handleInputChange,
	...props
}) => {
	const classes = useStyles()
	const [defaultValue, setDefaultValue] = useState()

	const handleOnChange = (event, newValue) => {
		handleChange({
			target: {
				name: name,
				value: newValue.map((v) => v.value),
			},
		})
	}

	const setInitialValues = () => {
		let initialValues = []
		initialValues = options.filter((o) =>
			value.includes(o.value)
		)
		setDefaultValue(initialValues)
	}

	useEffect(() => {
		if (value) setInitialValues()
	}, [value])

	return (
		<div className={classes.container}>
			<Typography
				variant="body2"
				color="textSecondary"
				className={classes.label}
			>
				{label}
			</Typography>
			{defaultValue && (
				<Autocomplete
					multiple
					classes={{ inputRoot: classes.inputRoot }}
					defaultValue={defaultValue}
					onChange={handleOnChange}
					options={options}
					getOptionLabel={(option) => option.label}
					renderTags={(tagValue, getTagProps) =>
						tagValue.map((option, index) => (
							<Chip
								label={option.label}
								{...getTagProps({ index })}
							/>
						))
					}
					renderInput={(params) => {
						return (
							<TextField
								{...params}
								variant="outlined"
								placeholder={placeholder}
							/>
						)
					}}
				/>
			)}
		</div>
	)
}

export default MultiAutosuggest

const useStyles = makeStyles((theme) => ({
	root: {},
	inputRoot: {
		backgroundColor: 'white',
		padding: '5px 5px !important',
	},
	label: {
		marginBottom: 0,
	},
}))
