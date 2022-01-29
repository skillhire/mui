import React from 'react'
import PropTypes from 'prop-types'
import { Tab } from '@mui/material'
import { withStyles, makeStyles } from '@mui/styles'

const ReactTab = ({ label, value, ...props }) => {
	return <StyledTab label={label} value={value} />
}

ReactTab.propTypes = {
	label: PropTypes.string,
	value: PropTypes.any,
}

export default ReactTab

const StyledTab = withStyles((theme) => ({
	root: {
		textTransform: 'none',
		minWidth: 72,
		marginRight: theme.spacing(4),
		color: theme.palette.text.secondary,
		'&:hover': {
			opacity: 1,
		},
		'&$selected': {
			fontWeight: theme.typography.fontWeightMedium,
		},
		'&:focus': {},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />)
