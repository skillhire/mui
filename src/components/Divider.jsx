import React from 'react'
import { makeStyles } from '@mui/styles'

const ReactDivider = (props) => {
	const classes = useStyles()
	return <div className={classes.root} />
}

export default ReactDivider

const useStyles = makeStyles((theme) => ({
	root: {
		borderBottom: `1px solid ${theme.palette.common.border}`,
	},
}))
