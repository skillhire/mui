import React from 'react'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
	root: {},
	inputBase: {
		width: '100%',
		'& input, & textarea': {
			'-webkit-appearance': 'none',
			'-moz-appearance': 'none',
			appearance: 'none',
			borderRadius: 4,
			backgroundColor: theme.palette.common.white,
			height: 26,
			padding: theme.spacing(1),
			transition: theme.transitions.create([
				'border-color',
				'box-shadow',
			]),
			border: `1px solid ${theme.palette.common.inputBorder}`,
			boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
			fontSize: theme.typography.body3.fontSize,
			fontFamily: theme.typography.body3.fontFamily,
			'&:focus': {
				border: (props) =>
					props.error == true
						? `2px solid ${theme.palette.common.errorBorder}`
						: `1px solid ${theme.palette.primary.light}`,
			},
		},
	},
	IconButton: {
		padding: '5px',
	},
	icon: {
		fontSize: '20px',
		color: '#888',
	},
}))
