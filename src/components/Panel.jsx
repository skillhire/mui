import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

const Panel = ({
	children,
	maxWidth = 'xl',
	p = 3,
	...props
}) => {
	const classes = useStyles()
	return (
		<Box p={p} className={classes.root}>
			{children}
		</Box>
	)
}

Panel.propTypes = {
	children: PropTypes.any,
	maxWidth: PropTypes.string,
	p: PropTypes.number,
}

export default Panel

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.common.white,
		borderBottom: `1px solid ${theme.palette.common.border}`,
	},
}))
