import React from 'react'
import { Hidden, Button, ListItem } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import clsx from 'clsx'

const MenuItem = ({
	handleClick,
	indent,
	active,
	value,
	depth = 0,
	open,
	expandable = false,
	text,
	image,
	icon: Icon,
	image: Image,
}) => {
	const classes = useStyles()

	let paddingLeft = 18

	if (depth > 0) {
		paddingLeft = 42 + 8 * depth
	}

	const style = {
		paddingLeft,
	}

	return (
		<ListItem className={classes.itemLeaf} disableGutters>
			<Button
				onClick={handleClick}
				className={clsx(
					classes.button,
					`depth-${depth}`,
					active ? classes.active : null
				)}
				style={style}
				color="primary"
				startIcon={
					<>
						{Icon && <Icon className={classes.icon} />}
						{image && (
							<img src={Image} className={classes.icon} />
						)}
					</>
				}
			>
				<Hidden smUp>{text}</Hidden>
				{expandable && (
					<>
						{open ? (
							<ExpandLess
								className={classes.expandIcon}
								color="inherit"
							/>
						) : (
							<ExpandMore
								className={classes.expandIcon}
								color="inherit"
							/>
						)}
					</>
				)}
			</Button>
		</ListItem>
	)
}
export default MenuItem

const useStyles = makeStyles((theme) => ({
	item: {
		display: 'block',
	},
	itemLeaf: {
		display: 'flex',
		paddingTop: 0,
		paddingBottom: 0,
	},
	button: {
		borderRadius: '0',
		color: theme.palette.common.white,
		padding: '12px 8px',
		justifyContent: 'flex-start',
		textTransform: 'none',
		letterSpacing: 0,
		width: '100%',
		'&:hover': {
			backgroundColor: theme.palette.primary.dark,
		},
	},
	icon: {
		height: 20,
		width: 20,
		color: theme.palette.common.white,
		display: 'flex',
		alignItems: 'center',
		margin: theme.spacing(0, 1, 0, 1),
	},
	expandIcon: {
		marginLeft: 'auto',
		height: 20,
		width: 20,
	},
	label: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: 'auto',
	},
	active: {
		color: 'white',
		backgroundColor: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightBold,
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
		},
		'& $icon': {
			color: 'white',
		},
	},
}))
