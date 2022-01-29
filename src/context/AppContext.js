import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	
  const [alert, setAlert] = useState()
	const [loading, setLoading] = useState(false)
	const [loaded, setLoaded] = useState(false)

	const [showMenu, setShowMenu] = useState(false)
	const [activeTab, setActiveTab] = useState(false)

	const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

	const value = {
		alert,
		setAlert,
		activeTab,
		setActiveTab,
		loading,
		loaded,
		setLoaded,
		setLoading,
		showMenu,
		toggleMenu
	}

	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	)
}
