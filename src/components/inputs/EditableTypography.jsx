import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

const EditableTypography = ({
	variant,
	children,
	name,
	handleChange,
	className,
}) => {
	const classes = useStyles()

	const [text, useText] = useState(children)

	const handleInputChange = (e) => {
		let value = e.currentTarget?.textContent
		handleChange({
			target: {
				value: value,
				name: name,
			},
		})
	}

	return (
		<Typography
			contentEditable="true"
			suppressContentEditableWarning={true}
			onInput={handleInputChange}
			variant={variant}
			className={classes.typography}
		>
			{text}
		</Typography>
	)
}

EditableTypography.propTypes = {
	variant: PropTypes.string,
	name: PropTypes.string,
	handleChange: PropTypes.func,
	children: PropTypes.string,
	className: PropTypes.string,
}

export default EditableTypography

const useStyles = makeStyles((theme) => ({
	typography: {
		color: theme.palette.wireframe.text,
		outline: '0px solid red',
	},
}))
