import React from 'react'
import { Avatar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { User } from 'react-feather'

const UserAvatar = ({
	src,
	size = 40,
	variant = 'circle',
}) => {
	const classes = useStyles({
		size: size,
		src: src,
	})

	return (
		<Avatar
			variant={variant}
			color="primary"
			className={classes.avatar}
			src={src}
		>
			<User className={classes.icon} size={size} />
		</Avatar>
	)
}

export default UserAvatar

const useStyles = makeStyles((theme) => ({
	avatar: {
		backgroundColor: (props) =>
			props.src
				? 'transparent'
				: theme.palette.common.white,
		width: (props) => props.size,
		height: (props) => props.size,
	},
	icon: {
		color: theme.palette.text.secondary,
		width: (props) => props.size / 2,
		height: (props) => props.size / 2,
		maxHeight: 32,
		maxWidth: 32,
	},
}))
