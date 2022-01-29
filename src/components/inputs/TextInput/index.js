import React, { useState } from 'react'
import {
	FormControl,
	InputBase,
	Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import { useStyles } from './styles'

const TextInput = ({
	className,
	required,
	label,
	type,
	name,
	margin,
	value,
	multiline,
	handleChange,
	rows,
	placeholder,
	disabled,
	onKeyPress,
	autoComplete = 'off',
	startIcon,
	endIcon,
	isClearable,
	isLoading,
	error,
	...props
}) => {
  
	const classes = useStyles({
		error: error,
	})

	return (
		<FormControl
			fullWidth
			className={clsx(className, classes.root)}
		>
			<Typography variant="caption" color="textSecondary">
				{label}
			</Typography>
			<InputBase
				rows={rows}
				className={classes.inputBase}
				multiline={multiline}
				autoComplete="off"
				fullWidth
				type={type}
				name={name}
				margin={margin}
				disabled={disabled}
				placeholder={placeholder}
				onKeyPress={onKeyPress}
				variant="outlined"
				onChange={handleChange}
				value={value || ''}
			/>
		</FormControl>
	)
}

export default TextInput
