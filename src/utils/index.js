export const buildOptions = (items, key, value) => {
	if (!items) return null
	let options = []
	let list = []
	if (items.data) {
		list = items.data
	} else {
		list = items
	}
	list.forEach((item, idx) => {
		let label = item[value]
		if (Array.isArray(value)) {
			label = value
				.map((v) => eval(`item.${v}`))
				.join(' - ')
		}
		return options.push({ value: item[key], label: label })
	})
	return options
}

export const syntheticEvent = (
	value,
	name,
	type = 'text'
) => {
	let ev = {
		target: {
			value,
			name,
			type,
		},
	}
	return ev
}
