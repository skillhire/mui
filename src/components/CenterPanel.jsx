import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

const CenterPanel = ({ children, open, ...props }) => {
	const classes = useStyles()

	return (
		<div
			className={clsx(classes.root, {
				[classes.open]: open,
			})}
		>
			{children}
		</div>
	)
}

CenterPanel.propTypes = {
	children: PropTypes.any,
}

export default CenterPanel

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		height: '100%',
		flexGrow: 1,
		overflowY: 'scroll',
		[theme.breakpoints.down('sm')]: {
			flexBasis: '100%',
			height: '100%',
			width: '100%',
			maxWidth: 'none',
			flexShrink: '0',
			transition: 'transform .5s ease',
			transform: 'translateX(0)',
		},
	},
	open: {
		[theme.breakpoints.down('sm')]: {
			transform: 'translateX(-100%)',
		},
	},
}))
