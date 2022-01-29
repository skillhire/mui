import React, { useState } from 'react'
import TextInput from './TextInput'
import { XCircle, Edit, CheckCircle } from 'react-feather'
import { IconButton, CircularProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'

const EditableTextInput = ({
	value,
	name,
	label,
	handleChange,
	handleSubmit,
	isLoading,
	placeholder,
	...props
}) => {
	const classes = useStyles()
	const [editing, setEditing] = useState(false)

	const handleSubmitInput = (name, value) => {
		setEditing(false)
		handleSubmit(name, value)
	}

	return (
		<div className={classes.root}>
			<TextInput
				disabled={!editing}
				value={value}
				label={label}
				name={name}
				handleChange={handleChange}
				placeholder={placeholder}
			/>
			<div className={classes.icons}>
				{isLoading ? (
					<CircularProgress
						size={24}
						className={classes.icon}
					/>
				) : (
					<React.Fragment>
						{editing ? (
							<IconButton
								size="small"
								onClick={() => setEditing(false)}
								className={classes.iconButton}
							>
								<XCircle className={classes.icon} />
							</IconButton>
						) : (
							<IconButton
								size="small"
								onClick={() => setEditing(true)}
								className={classes.iconButton}
							>
								<Edit className={classes.icon} />
							</IconButton>
						)}
						{editing && (
							<IconButton
								size="small"
								onClick={() =>
									handleSubmitInput(name, value)
								}
								className={classes.iconButton}
							>
								<CheckCircle className={classes.icon} />
							</IconButton>
						)}
					</React.Fragment>
				)}
			</div>
		</div>
	)
}

export default EditableTextInput

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		height: '100%',
		alignItems: 'center',
	},
	icons: {
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'row',
		height: '100%',
		alignItems: 'center',
	},
	icon: {
		height: 20,
		width: 20,
		color: theme.palette.secondary.main,
	},
	iconButton: {},
}))
