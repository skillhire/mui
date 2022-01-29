import React from 'react'
import PropTypes from 'prop-types'
import BackButton from './BackButton'
import { Avatar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const PanelHeader = ({
	title,
	subtitle,
	image,
	handleBackClick,
	actions,
}) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.toolbar}>
				<BackButton onClick={handleBackClick} />
				<div>
					{image && (
						<Avatar
							variant="rounded"
							className={classes.avatar}
						>
							<img
								src={image}
								alt={title}
								className={classes.image}
							/>
						</Avatar>
					)}
				</div>
				<div className={classes.titleBar}>
					<Typography
						variant="h6"
						className={classes.title}
					>
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary">
						{subtitle}
					</Typography>
				</div>
			</div>
			{actions && (
				<div className={classes.actions}>{actions}</div>
			)}
		</div>
	)
}

PanelHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	actions: PropTypes.any,
}

export default PanelHeader

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 74,
		width: '100%',
		borderBottom: `1px solid ${theme.palette.common.border}`,
		background: theme.palette.common.white,
	},
	avatar: {
		margin: theme.spacing(2, 0, 2, 2),
		backgroundColor: theme.palette.common.white,
		boxShadow: `rgb(0 0 0 / 10%) 0px 2px 4px !important`,
	},
	toolbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	titleBar: {
		padding: theme.spacing(2),
	},
	title: {
		lineHeight: 1.0,
	},
	actions: {
		padding: theme.spacing(2),
	},
	image: {
		height: 32,
		width: 32,
	},
}))
