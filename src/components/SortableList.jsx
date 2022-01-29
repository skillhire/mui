import React from 'react'
import PropTypes from 'prop-types'
import { List } from '@mui/material'
import { makeStyles } from '@mui/styles'
import {
	DragDropContext,
	Draggable,
	Droppable,
} from 'react-beautiful-dnd'
import clsx from 'clsx'

const SortableList = ({
	items,
	droppableId,
	renderItem,
	handleDrop,
	onDelete,
}) => {
	const classes = useStyles()

	const reorder = (items, startIndex, endIndex) => {
		const result = Array.from(items)
		const [removed] = result.splice(startIndex, 1)
		result.splice(endIndex, 0, removed)
		return result.map((item, index) => ({
			...item,
			position: index + 1,
		}))
	}

	const onDragEnd = (result) => {
		if (!result.destination) {
			return items
		}
		const sorted = reorder(
			items,
			result.source.index,
			result.destination.index
		)
		handleDrop(sorted)
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId={droppableId}>
				{(provided) => {
					return (
						<div className={classes.root}>
							<List
								className={classes.list}
								disablePadding
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{items.map((item, i) => (
									<Draggable
										key={item.id}
										draggableId={String(item.id)}
										index={i}
									>
										{(provided, snapshot) => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												className={clsx(
													classes.draggableItem,
													{
														[classes.isDragging]:
															snapshot.isDragging,
													}
												)}
											>
												{renderItem({
													...item,
													isDragging: snapshot.isDragging,
												})}
											</div>
										)}
									</Draggable>
								))}
							</List>
							{provided.placeholder}
						</div>
					)
				}}
			</Droppable>
		</DragDropContext>
	)
}

SortableList.propTypes = {
	droppableId: PropTypes.string.isRequired,
	items: PropTypes.array,
	handleDrop: PropTypes.func,
}

export default SortableList

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
	},
	list: {
		overflowY: 'scroll',
	},
	draggableItem: {},
	isDragging: {},
}))
