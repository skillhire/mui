import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import TextInput from './TextInput'

const NoSpaceInput = ({
	value,
	name,
	label,
	placeholder,
	handleChange,
	disabled,
	...props
}) => {
	const classes = useStyles()

	const [error, setError] = useState(false)

	const formatChange = (ev) => {
		let { value } = ev.target
		value = value.replace(' ', '_').toLowerCase()

		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<TextInput
			error={error}
			value={value}
			disbaled={disabled}
			placeholder={placeholder}
			handleChange={formatChange}
			name={name}
			label={label}
		/>
	)
}

export default NoSpaceInput

const useStyles = makeStyles((theme) => ({
	root: {},
}))
