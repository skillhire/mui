import React from 'react'
import ApiContext from 'context/ApiContext'
import axios from 'axios'

const ApiProvider = ({ url, children }) => {
	const configApi = (baseURL) => {
		let headers = {
			'Content-Type': 'application/json',
		}
		// on page reload, get the token from localStorage
		let token = localStorage.getItem('authToken')
		if (token) {
			headers = {
				...headers,
				Authorization: `${token}`,
			}
		}

		const api = axios.create({
			baseURL: baseURL,
			headers: headers,
			timeout: 60000,
		})

		api.interceptors.response.use(
			(resp) => Promise.resolve(resp.data),
			(error) => Promise.reject(error.response)
		)

		return api
	}

	let api = configApi(url)

	const value = {
		api,
	}

	return (
		<ApiContext.Provider value={value}>
			{children}
		</ApiContext.Provider>
	)
}

export default ApiProvider
