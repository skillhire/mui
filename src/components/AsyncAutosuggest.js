import React, { useContext, useEffect, useState } from 'react'
import ApiContext from '../context/ApiContext'
import Autosuggest from 'components/Autosuggest'
import { makeStyles } from '@mui/styles'
import { buildOptions } from '../utils'

const AsyncAutoselect = ({
	value,
	label,
	name,
	remoteUrl,
	query,
	displayField,
	handleChange,
	position,
	placeholder = 'Search',
	...props
}) => {

  const { api } = useContext(ApiContext)

	const [option, setOption] = useState()
	const [options, setOptions] = useState([])

	const classes = useStyles()

	const findValue = async (value) => {
		let resp = await api.get(`${remoteUrl}/${value}`)
		setOption({
			value: resp?.data?.id,
			label: resp?.data[displayField],
		})
	}

	const findOptions = async (keywords) => {
		let resp = await api.get(remoteUrl, {
			params: {
				keywords: keywords,
				...query,
			},
		})
		let results = buildOptions(
			resp.data,
			'id',
			displayField
		)
		setOptions(results)
	}

	const handleInputChange = (newValue) => {
		findOptions(newValue)
	}

	useEffect(() => {
		findOptions()
	}, [])

	useEffect(() => {
		if (value) {
			findValue(value)
		}
	}, [value])

	return (
		<Autosuggest
			label={label}
			name={name}
			value={option}
			options={options}
			placeholder={placeholder}
			handleChange={handleChange}
			handleInputChange={handleInputChange}
		/>
	)
}

export default AsyncAutoselect

const useStyles = makeStyles((theme) => ({
	root: {},
}))
