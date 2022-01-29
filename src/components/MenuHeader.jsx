import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const MenuHeader = ({
	title,
	subtitle,
	disableBorder = false,
	...props
}) => {
	const classes = useStyles({ disableBorder })

	return (
		<div className={classes.root}>
			<div className={classes.title}>
				<Typography variant="subtitle1">{title}</Typography>
				<Typography variant="body2" color="textSecondary">
					{subtitle}
				</Typography>
			</div>
		</div>
	)
}

MenuHeader.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
}

export default MenuHeader

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderTop: (props) =>
			!props.disableBorder &&
			`1px solid ${theme.palette.common.border}`,
	},
	title: {
		padding: theme.spacing(2, 2, 1, 2),
	},
}))
