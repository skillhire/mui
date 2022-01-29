import React from 'react'
import { makeStyles } from '@mui/styles'
import ResponsiveImage from './ResponsiveImage'

const CoverImage = ({
	maxHeight = '100%',
	width = '100%',
	alignItems = 'center',
	src,
}) => {
	const classes = useStyles({
		maxHeight,
		width,
		alignItems,
	})
	return (
		<div className={classes.root}>
			<ResponsiveImage src={src} />
		</div>
	)
}

export default CoverImage

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: (props) => props.alignItems,
		overflow: 'hidden',
		width: '100%',
		height: 'auto',
		maxHeight: (props) => props.maxHeight,
	},
}))
