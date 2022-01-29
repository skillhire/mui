import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

const useTabs = (tab) => {
	const { activeTab, setActiveTab } = useContext(AppContext)

	useEffect(() => {
		if (tab) {
			setActiveTab(tab)
		}
	}, [tab])

	return {
		activeTab,
		setActiveTab,
	}
}

export default useTabs
