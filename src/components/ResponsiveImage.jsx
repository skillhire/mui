import React from 'react'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

const ResponsiveImage = ({ src, className }) => {
	const classes = useStyles()

	return (
		<img
			src={src}
			className={clsx(className, classes.responsive)}
		/>
	)
}

export default ResponsiveImage

const useStyles = makeStyles((theme) => ({
	responsive: {
		width: '100%',
		height: 'auto',
	},
}))
