import React from 'react'
import { IconButton, Hidden } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ChevronLeft } from 'react-feather'

const BackButton = ({ onClick }) => {
	const classes = useStyles()

	return (
		<Hidden smUp>
			<div className={classes.goBack}>
				{onClick && (
					<IconButton
						onClick={onClick}
						className={classes.backButton}
					>
						<ChevronLeft />
					</IconButton>
				)}
			</div>
		</Hidden>
	)
}

export default BackButton

const useStyles = makeStyles((theme) => ({
	goBack: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		marginLeft: 50,
	},
	backButton: {
		color: theme.palette.secondary.main,
	},
}))
