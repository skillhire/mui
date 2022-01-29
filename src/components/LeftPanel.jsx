import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

const LeftPanel = ({
	title,
	open,
	subtitle,
	children,
	actions,
	...props
}) => {
	const classes = useStyles()

	return (
		<div
			className={clsx(classes.root, {
				[classes.open]: open,
			})}
		>
			<div className={classes.container}>{children}</div>
		</div>
	)
}

LeftPanel.propTypes = {
	children: PropTypes.any.isRequired,
}

export default LeftPanel

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		backgroundColor: theme.palette.common.white,
		borderRight: `1px solid ${theme.palette.common.border}`,
		minWidth: 240,
		[theme.breakpoints.down('sm')]: {
			flexBasis: '100%',
			height: '100%',
			width: '100%',
			maxWidth: 'none',
			flexShrink: '0',
			transition: 'transform .5s ease',
			transform: 'translateX(0)',
			width: '100%',
		},
	},
	open: {
		[theme.breakpoints.down('sm')]: {
			transform: 'translateX(-100%)',
		},
	},
	headerContainer: {
		display: 'flex',
		flexScale: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottom: `1px solid ${theme.palette.common.border}`,
		padding: theme.spacing(2),
		height: 74,
		background: `linear-gradient(#fff, ${theme.palette.common.gradient})`,
	},
	header: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: 50,
		},
	},
	title: {
		lineHeight: 1.0,
	},
	container: {
		width: '100%',
		overflowY: 'scroll',
		overflowX: 'none',
	},
}))
