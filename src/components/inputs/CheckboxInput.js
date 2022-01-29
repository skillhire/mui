import React from 'react'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Typography,
} from '@mui/material'

const CheckboxInput = ({
	style,
	name,
	value,
	text,
	label,
	handleChange,
	...props
}) => (
	<FormControl style={style}>
		<FormGroup>
			<Typography variant="body2">{text}</Typography>
			<FormControlLabel
				control={
					<Checkbox
						name={name}
						checked={value === true ? true : false}
						onChange={handleChange}
						value="true"
					/>
				}
				label={label}
			/>
		</FormGroup>
	</FormControl>
)

export default CheckboxInput
