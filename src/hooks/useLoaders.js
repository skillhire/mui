import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const useLoaders = () => {

	const { 
    loading, 
    loaded, 
    setLoading, 
    setLoaded 
  } = useContext(AppContext)

	const showLoading = () => setLoading(true)
	const hideLoading = () => setLoading(false)

	return {
		loading,
		loaded,
		setLoading,
		setLoaded,
		showLoading,
		hideLoading
	}
}

export default useLoaders
