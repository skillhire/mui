import React, { useState } from 'react'
import { IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { DeleteOutlined } from '@mui/icons-material'
import clsx from 'clsx'
import ProgressLoader from './ProgressLoader'
import Dropzone from 'react-dropzone'
import {
	UploadCloud,
	DownloadCloud,
	CheckCircle,
} from 'react-feather'

const IMAGE_WIDTH = 140

const ImageUploader = ({
	circle = true,
	handleUpload,
	label = 'Upload media',
	size = IMAGE_WIDTH,
	imageUrl,
	handleDelete,
	...props
}) => {
	const classes = useStyles({ size })
	const [isEditing, setIsEditing] = useState(false)
	const [file, setFile] = useState()
	const [files, setFiles] = useState([])
	const [isUploading, setIsUploading] = useState(false)
	const [isUploaded, setIsUploaded] = useState(false)
	const [dropzoneActive, setDropzoneActive] =
		useState(false)

	const handleEditClick = () => setIsEditing(!isEditing)

	const onDrop = async (files) => {
		setIsUploading(true)
		setIsUploaded(false)
		await handleUpload(files[0])
		setIsEditing(false)
		setIsUploading(false)
		setIsUploaded(true)
		setFiles([])
		setFile(null)
	}

	const onDragEnter = (files) => {
		setFiles(files)
		setDropzoneActive(true)
	}

	const onDragLeave = (files) => {
		setFiles(files)
		setDropzoneActive(false)
	}

	return (
		<div>
			{imageUrl && !isEditing && (
				<img
					className={clsx(classes.image, {
						[classes.circle]: circle,
					})}
					size={size}
					src={imageUrl}
				/>
			)}

			{(isEditing || !imageUrl) && (
				<Dropzone
					className={classes.dropZone}
					disableClick={false}
					onDrop={onDrop}
					onDragEnter={onDragEnter}
					onDragLeave={onDragLeave}
					multiple={true}
				>
					{!isUploaded && !isUploading && !dropzoneActive && (
						<div>
							<UploadCloud className={classes.icon} />
							<Typography variant="body2" color="secondary">
								{label}
							</Typography>
						</div>
					)}

					{isUploaded && (
						<div>
							<CheckCircle className={classes.icon} />
							<Typography variant="body2" color="secondary">
								Upload completed.
							</Typography>
							<Typography variant="body2" color="secondary">
								Drag and drop more files to upload.
							</Typography>
						</div>
					)}

					{!isUploaded && !isUploading && dropzoneActive && (
						<div>
							<DownloadCloud className={classes.icon} />
							<Typography variant="body2" color="secondary">
								Drop file to upload.
							</Typography>
						</div>
					)}

					{!isUploaded && isUploading && (
						<ProgressLoader size={300} />
					)}
				</Dropzone>
			)}

			{imageUrl && handleDelete && (
				<IconButton
					className={classes.iconButton}
					size="small"
					onClick={handleDelete}
				>
					<DeleteOutlined />
				</IconButton>
			)}
		</div>
	)
}

export default ImageUploader

const useStyles = makeStyles((theme) => ({
	image: {
		padding: 2,
		marginRight: theme.spacing(1),
		height: (props) => props.size,
		width: (props) => props.size,
	},
	circle: {
		borderRadius: 100,
	},
	dropZone: {
		margin: 0,
		height: 140,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		border: `1px solid ${theme.palette.common.inputBorder}`,
		boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
		backgroundColor: theme.palette.common.white,
		textAlign: 'center',
		marginBottom: theme.spacing(2),
	},
	icon: {
		height: 44,
		width: 44,
		color: theme.palette.secondary.light,
	},
	iconButton: {
		fontSize: 11,
		top: 0,
		left: -48,
		color: theme.palette.text.secondary,
		'&& ': {
			backgroundColor: theme.palette.common.white,
		},
	},
}))
