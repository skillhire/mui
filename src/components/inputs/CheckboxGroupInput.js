import React from 'react'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const CheckboxGroupInput = ({
	style,
	label,
	options,
	handleChange,
	...props
}) => (
	<FormControl style={style}>
		<FormGroup>
			<Typography variant="body2" color="textSecondary">
				{label}
			</Typography>
			{options &&
				options.map((option, idx) => (
					<FormControlLabel
						key={idx}
						control={
							<Checkbox
								name={option.name}
								checked={option.value ? true : false}
								onChange={handleChange}
								value={true}
							/>
						}
						label={
							<Typography variant="body2">
								{option.label}
							</Typography>
						}
					/>
				))}
		</FormGroup>
	</FormControl>
)

export default CheckboxGroupInput
