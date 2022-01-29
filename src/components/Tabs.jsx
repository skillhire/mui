import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from '@mui/material'
import { withStyles, makeStyles } from '@mui/styles'

const ReactTabs = ({
	children,
	value,
	onChange,
	...props
}) => {
	return (
		<StyledTabs
			value={value}
			onChange={onChange}
			color="primary"
		>
			{children}
		</StyledTabs>
	)
}

ReactTabs.propTypes = {
	children: PropTypes.any,
	value: PropTypes.any,
	onChange: PropTypes.func.isRequired,
}

export default ReactTabs

const StyledTabs = withStyles((theme) => ({
	indicator: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		'& > span': {
			maxWidth: 40,
			width: '100%',
			backgroundColor: theme.palette.text.secondary,
		},
	},
}))((props) => (
	<Tabs
		{...props}
		TabIndicatorProps={{ children: <span /> }}
	/>
))
