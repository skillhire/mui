import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Panel from './Panel'

const AuthScreen = ({
	title,
	subtitle,
	children,
	...props
}) => {

	return (
		<Container maxWidth="sm">
			<Box my={10}>
				<Panel p={4}>
					<Box mt={2} mb={3}>
						<Typography variant="h4">{title}</Typography>
						{subtitle && (
							<Typography
								variant="body1"
								color="textSecondary"
							>
								{subtitle}
							</Typography>
						)}
					</Box>
					{children}
				</Panel>
			</Box>
		</Container>
	)
}

export default AuthScreen
