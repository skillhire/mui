import React from 'react'
import { Hidden, Button, IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'

const MobileButton = ({
	startIcon,
	onClick,
	color = 'secondary',
	variant,
	children,
}) => {
	const classes = useStyles()

	return (
		<React.Fragment>
			<Hidden smDown>
				<Button
					variant={variant}
					color={color}
					startIcon={startIcon}
					onClick={onClick}
				>
					{children}
				</Button>
			</Hidden>
			<Hidden smUp>
				<IconButton
					variant={variant}
					color={color}
					onClick={onClick}
				>
					{startIcon}
				</IconButton>
			</Hidden>
		</React.Fragment>
	)
}

export default MobileButton

const useStyles = makeStyles((theme) => ({
	root: {},
}))
