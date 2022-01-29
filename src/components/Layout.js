import React from 'react'
import clsx from 'clsx'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useResponsive } from '../hooks'

const Layout = ({ children, desktopWidth=60, ...props }) => {
	const { isMobile } = useResponsive()
	const classes = useStyles({ 
    isMobile,
    desktopWidth
  })

	return (
		<Box
			className={clsx(classes.content, {
				[classes.contentShift]: isMobile,
			})}
		>
			{children}
		</Box>
	)
}

export default Layout

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	content: {
		transition: theme.transitions.create('padding', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: (props) => !props.isMobile && props.desktopWidth,
	},
	contentShift: {
		transition: theme.transitions.create('padding', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}))
