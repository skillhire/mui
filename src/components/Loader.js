import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { LinearProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'

const Loader = () => {
	const classes = useStyles()
	const { loading } = useContext(AppContext)
	return loading ? (
		<LinearProgress
			color="primary"
			className={classes.linearProgress}
		/>
	) : null
}
export default Loader

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
	},
	linearProgress: {
		position: 'fixed',
		backgroundColor: 'transparent',
		top: 0,
		height: 3,
		width: '100vw',
		zIndex: theme.zIndex.drawer + 1,
	},
}))
