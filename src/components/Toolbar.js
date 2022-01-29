import React from 'react'
import {
	Box,
	Container,
	Grid,
	IconButton,
	Paper,
	Slide,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Close } from '@mui/icons-material'

const Toolbar = ({
	open,
	handleClose,
	children,
	...props
}) => {
	const classes = useStyles()

	return (
		<Slide in={open} direction="down">
			<Paper className={classes.paper} square elevation={2}>
				<Container className={classes.paper} maxWidth="xl">
					<Grid container spacing={1}>
						<Grid item xs={1} />
						<Grid item xs={10}>
							<Box
								display="flex"
								mt={1}
								justifyContent="center"
							>
								{children}
							</Box>
						</Grid>
						<Grid item xs={1}>
							<Box
								display="flex"
								width="100%"
								justifyContent="flex-end"
							>
								<IconButton
									className={classes.button}
									onClick={handleClose}
								>
									<Close />
								</IconButton>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Paper>
		</Slide>
	)
}

export default Toolbar

const useStyles = makeStyles((theme) => ({
	paper: {
		zIndex: 2000,
		backgroundColor: theme.palette.common.white,
		top: 0,
		left: 0,
		position: 'fixed',
		height: 64,
		width: '100%',
	},
	container: {
		paddingTop: 10,
	},
	button: {
		marginTop: 4,
	},
}))
