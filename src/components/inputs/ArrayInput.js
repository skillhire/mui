import React from 'react'
import {
	FormControl,
	Popper,
	Typography,
	Autocomplete,
	Chip,
	TextField,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { X } from 'react-feather'

const CustomPopper = function (props) {
	const classes = useStyles()
	return (
		<Popper
			{...props}
			className={classes.popper}
			placement="bottom"
		/>
	)
}

const ArrayInput = ({
	label,
	name,
	value,
	placeholder,
	handleChange,
}) => {
	const classes = useStyles()

	const handleInputChange = (ev, values) => {
		let newValues = values.filter((value) => value != null)
		handleChange({
			target: {
				name,
				value: newValues,
			},
		})
	}

	return (
		<FormControl fullWidth>
			<Typography variant="caption" color="textSecondary">
				{label}
			</Typography>
			<Autocomplete
				multiple
				freeSolo
				hasClearIcon={false}
				defaultValue={value}
				onChange={handleInputChange}
				options={['Enter value']}
				getOptionLabel={(option) => option}
				PopperComponent={CustomPopper}
				clearIcon={<X className={classes.icon} />}
				renderTags={(tagValue, getTagProps) =>
					tagValue.map((option, index) => (
						<Chip
							className={classes.chip}
							label={option}
							color="secondary"
							variant="outlined"
							deleteIcon={<X className={classes.icon} />}
							{...getTagProps({ index })}
						/>
					))
				}
				renderInput={(params) => (
					<TextField
						{...params}
						color="secondary"
						className={classes.textField}
						margin="dense"
						variant="outlined"
					/>
				)}
			/>
		</FormControl>
	)
}

export default ArrayInput

export const useStyles = makeStyles((theme) => ({
	root: {},
	textField: {
		'& .MuiOutlinedInput-root': {
			padding: 4,
			fontSize: theme.typography.body3.fontSize,
			fontFamily: theme.typography.body3.fontFamily,
			borderRadius: 4,
			backgroundColor: theme.palette.common.white,
			transition: theme.transitions.create([
				'border-color',
				'box-shadow',
			]),
			border: `1px solid ${theme.palette.common.inputBorder}`,
			transition: theme.transitions.create([
				'border-color',
				'box-shadow',
			]),
			boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
			width: '100%',
			'& fieldset': {
				border: `1px solid transparent`,
			},
			'&:hover fieldset': {
				border: `1px solid transparent`,
			},
			'&.Mui-focused fieldset': {
				border: `0px solid ${theme.palette.primary.light}`,
			},
		},
		root: {
			height: 26,
		},
	},
	icon: {
		height: 20,
		width: 20,
		color: '#888',
	},
	popper: {
		fontWeight: theme.typography.body3.fontWeight,
		fontFamily: theme.typography.body3.fontFamily,
	},
}))
