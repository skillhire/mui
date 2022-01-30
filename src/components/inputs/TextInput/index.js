import React, { useState } from 'react'
import {
	FormControl,
	InputBase,
	Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
//import { useStyles } from './styles'

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
	
  /*const classes = useStyles({
		error: error,
	})*/

	return (
		<FormControl
			fullWidth
			className={className}
		>
			<Typography variant="caption" color="textSecondary">
				{label}
			</Typography>
			<InputBase
				rows={rows}
				multiline={multiline}
				autoComplete="off"
				fullWidth
				type={type}
        sx={ sx.inputBase }
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

const sx = {
	root: {},
	inputBase: {
		width: '100%',
		'& input, & textarea': {
			'-webkit-appearance': 'none',
			'-moz-appearance': 'none',
			appearance: 'none',
			borderRadius: 4,
			backgroundColor: 'common.white',
			height: 26,
			padding: 1,			
			borderSize: `1px`,
      borderColor: 'common.inputBorder',
			boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,						
		},
	},
	IconButton: {
		padding: '5px',
	},
	icon: {
		fontSize: '20px',
		color: '#888',
	},
}