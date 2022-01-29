import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'

const RightPanel = ({ children, ...props }) => {
	const classes = useStyles()

	return <div className={classes.root}>{children}</div>
}

RightPanel.propTypes = {
	children: PropTypes.any.isRequired,
}

export default RightPanel

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: 340,
		overflowX: 'hidden',
		backgroundColor: theme.palette.common.white,
		borderLeft: `1px solid ${theme.palette.common.border}`,
		'& #design-form-warning-box': {
			height: '0px !important',
			visibility: 'hidden !important',
			display: 'none  !important',
		},
	},
}))
