import React, { useEffect, useState } from 'react'
import { alpha, Typography, InputBase } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Autocomplete from '@mui/material/Autocomplete'
import clsx from 'clsx'

const Autosuggest = ({
	value,
	options,
	label,
	name,
	placeholder = 'Select',
	multiselect = false,
	handleChange,
	handleInputChange,
	freeSolo = false,
	className,
	...props
}) => {
	const classes = useStyles()
	const [selected, setSelected] = useState({
		label: '',
		value: null,
	})

	const handleOnChange = (event, newValue) => {
		setSelected(newValue)
		handleChange({
			target: {
				name: name,
				value: newValue?.value,
			},
		})
	}

	useEffect(() => {
		if (typeof value != 'object') {
			setSelected(options.find((o) => o.value == value))
		} else {
			setSelected(value)
		}
	}, [value])

	return (
		<div className={clsx(classes.container, className)}>
			<Typography
				variant="caption"
				color="textSecondary"
				className={classes.label}
			>
				{label}
			</Typography>
			<Autocomplete
				freeSolo={freeSolo}
				multiple={multiselect}
				disableCloseOnSelect={multiselect}
				classes={{
					paper: classes.paper,
					option: classes.option,
					popperDisablePortal: classes.popperDisablePortal,
				}}
				value={selected}
				onChange={(event, newValue) => {
					handleOnChange(event, newValue)
				}}
				onInputChange={(event, newInputValue) => {
					handleInputChange &&
						handleInputChange(newInputValue)
				}}
				noOptionsText="No options"
				clearOnBlur
				handleHomeEndKeys
				options={options}
				getOptionLabel={(option) => option?.label}
				getOptionSelected={(option, value) =>
					option?.label == value?.label
				}
				renderInput={(params) => (
					<InputBase
						placeholder={placeholder}
						ref={params.InputProps.ref}
						inputProps={{
							...params.inputProps,
							autoComplete: 'none',
						}}
						className={classes.inputBase}
					/>
				)}
			/>
		</div>
	)
}

export default Autosuggest

const useStyles = makeStyles((theme) => ({
	inputBase: {
		zIndex: theme.zIndex.modal + 2,
		padding: 0,
		width: '100%',
		'& input': {
			zIndex: theme.zIndex.modal + 2,
			'-webkit-appearance': 'none',
			'-moz-appearance': 'none',
			appearance: 'none',
			padding: theme.spacing(1),
			height: 26,
			borderRadius: 4,
			fontSize: theme.typography.body3.fontSize,
			fontFamily: theme.typography.body3.fontFamily,
			backgroundColor: theme.palette.common.white,
			transition: theme.transitions.create([
				'border-color',
				'box-shadow',
			]),
			border: '1px solid #ced4da',
			'&:focus': {
				boxShadow: `${alpha('#999999', 0.25)} 0 0 0 0.2rem`,
				borderColor: theme.palette.primary.light,
			},
		},
	},
	paper: {
		backgroundColor: theme.palette.common.white,
		marginTop: theme.spacing(1),
		color: '#586069',
		fontSize: 15,
	},
	option: {
		zIndex: '999 !important',
		minHeight: 'auto',
		alignItems: 'flex-start',
		padding: 8,
		'&[aria-selected="true"]': {
			backgroundColor: 'transparent',
		},
		'&[data-focus="true"]': {
			backgroundColor: theme.palette.action.hover,
		},
	},
	popperDisablePortal: {
		zIndex: theme.zIndex.modal + 2,
		position: 'relative',
	},
	label: {
		marginBottom: 0,
	},
}))
