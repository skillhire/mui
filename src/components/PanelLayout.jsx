import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'

const PanelLayout = ({ children, ...props }) => {
	const classes = useStyles()

	return <div className={classes.root}>{children}</div>
}

PanelLayout.propTypes = {
	children: PropTypes.any.isRequired,
}

export default PanelLayout

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: '100%',
		flexGrow: 1,
		height: 'calc(100vh)',
		overflow: 'none',
		zIndex: 0,
	},
}))
