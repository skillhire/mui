import React from 'react'
import useResponsive from '../hooks/useResponsive'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const Subheader = ({
	title,
	buttons,
	width,
	mb = 2,
	...props
}) => {
	const classes = useStyles()
	const { isMobile } = useResponsive()

	return (
		<Box className={classes.box} mb={mb}>
			<Box
				width="100%"
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
			>
				<Box ml={isMobile ? 6 : 3} mt={1.5}>
					<Typography color="textPrimary" variant="h4">
						{title}
					</Typography>
				</Box>
			</Box>
			<Box
        className={ classes.buttons }				
			>
				{ buttons && buttons }
			</Box>
		</Box>
	)
}
export default Subheader

const useStyles = makeStyles((theme) => ({
	box: {
		position: 'relative',
		height: 52,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: theme.palette.common.white,
		borderBottom: `1px solid ${theme.palette.common.border}`,
		boxShadow: `0px 0px 4px 0px ${theme.palette.common.border}`,
		background: `linear-gradient(#fff, ${theme.palette.common.gradient})`,
	},
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
    justifyContent: 'flex-end'
  }
}))
