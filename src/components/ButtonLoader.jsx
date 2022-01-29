import React from 'react'
import { CircularProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'

function ButtonLoader() {
	const classes = useStyles()

	return (
		<CircularProgress
			size={20}
			className={classes.loader}
		/>
	)
}

export default ButtonLoader

const useStyles = makeStyles((theme) => ({
	loader: {
		color: theme.palette.common.white,
	},
}))
