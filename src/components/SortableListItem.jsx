import React from 'react'
import PropTypes from 'prop-types'
import {
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { DragIndicator } from '@mui/icons-material'
import clsx from 'clsx'

const SortableListItem = ({
	item,
	isDragging,
	className,
	dragIconClassName,
}) => {
	const classes = useStyles()

	return (
		<ListItem
			disableGutters
			className={clsx(classes.item, className, {
				[classes.isDragging]: isDragging,
			})}
		>
			<ListItemIcon>
				<DragIndicator
					className={clsx(classes.icon, dragIconClassName)}
				/>
			</ListItemIcon>
			<ListItemText
				primary={item?.primary}
				seconeary={item?.secondary}
			/>
		</ListItem>
	)
}

SortableListItem.propTypes = {
	item: PropTypes.object.isRequired,
	isDragging: PropTypes.bool,
	className: PropTypes.string,
	dragIconClassName: PropTypes.string,
}

export default SortableListItem

const useStyles = makeStyles((theme) => ({
	item: {},
	icon: {
		color: theme.palette.text.secondary,
	},
	isDragging: {},
}))
