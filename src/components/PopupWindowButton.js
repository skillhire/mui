import React, { useState } from 'react'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

const SocialLoginButton = ({
	icon,
	label = 'Sign In',
	authorizationUrl,
	provider,
	onComplete,
	className,
	height = 600,
	width = 600,
	...rest
}) => {
	const classes = useStyles()

	const [popup, setPopup] = useState()

	const handleLoginClick = () => {
		let win = window.open(
			authorizationUrl,
			'targetWindow',
			`toolbar=no,
        location=no,
        left=400,
        top=100,
        toolbar=no,
        titlebar=no,
        status=no,
        menubar=no,
        scrollbars=yes,
        resizable=yes,
        width=${width},
        height=${height}`
		)
		win.document.title = label
		setPopup(win)
	}

	return (
		<div className={classes.root}>
			<Button
				fullWidth
				onClick={handleLoginClick}
				variant="contained"
				color="primary"
				className={clsx(classes.button, className)}
				startIcon={icon && icon}
			>
				{label}
			</Button>
		</div>
	)
}

export default SocialLoginButton

const useStyles = makeStyles((theme) => ({
	root: {},
	button: {
		'&&': {
			height: 44,
		},
	},
}))
