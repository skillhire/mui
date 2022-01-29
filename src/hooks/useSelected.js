import React, { useState } from 'react'

const useSelected = () => {
	const [selected, setSelected] = useState([])
	const [selectedIds, setSelectedIds] = useState([])

	const handleSelect = (item) => {
		if (selectedIds.find((id) => id === item.id)) {
			setSelected(selected.filter((i) => i.id != item.id))
			setSelectedIds(
				selectedIds.filter((id) => id != item.id)
			)
		} else {
			setSelected(selected.concat(item))
			setSelectedIds(selectedIds.concat(item.id))
		}
	}

	const handleClear = () => {
		setSelected([])
		setSelectedIds([])
	}

	return {
		selected,
		selectedIds,
		setSelected,
		setSelectedIds,
		handleSelect,
		handleClear,
	}
}

export default useSelected
