import React from 'react'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import Typography from '@mui/material/Typography'

const SelectInput = ({
	label,
	name,
	value,
	options,
	handleChange,
	...props
}) => (
	<FormControl fullWidth variant="outlined">
		<Typography variant="overline" gutterBottom>
			{label}
		</Typography>
		<Select
			native
			{...props}
			margin="dense"
			value={value}
			name={name}
			onChange={(e) => handleChange(e)}
			input={<OutlinedInput name={name} />}
		>
			<option value="" />
			{options &&
				options.map((option, idx) => (
					<option value={option.value} key={idx}>
						{option.text}
					</option>
				))}
		</Select>
	</FormControl>
)

export default SelectInput
