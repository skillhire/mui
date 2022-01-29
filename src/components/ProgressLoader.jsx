import React from 'react'
import { Box } from '@mui/material'
import CircularProgress, {
	circularProgressClasses,
} from '@mui/material/CircularProgress'

const ProgressLoader = ({ size = 300, ...props }) => {
	return (
		<Box sx={sx.root}>
			<Box sx={sx.box}>
				<CircularProgress
					variant="determinate"
					sx={sx.circularProgressBackground}
					size={48}
					thickness={4}
					{...props}
					value={100}
				/>
				<CircularProgress
					variant="indeterminate"
					disableShrink
					sx={sx.circularProgress}
					size={48}
					thickness={4}
					{...props}
				/>
			</Box>
		</Box>
	)
}

export default ProgressLoader

const sx = {
	root: {
		p: 4,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	box: {
		position: 'relative',
	},
	circularProgress: {
		color: (theme) => theme.palette.primary.light,
		animationDuration: '550ms',
		position: 'absolute',
		left: 0,
		[`& .${circularProgressClasses.circle}`]: {
			strokeLinecap: 'round',
		},
	},
	circularProgressBackground: {
		color: (theme) => theme.palette.common.skeleton,
	},
}
