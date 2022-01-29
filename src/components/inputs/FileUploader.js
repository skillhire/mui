import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import {
	Box,
	Button,
	LinearProgress,
	Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { InsertDriveFile } from '@mui/icons-material'

const FileUploader = ({
	fileUrl,
	handleUpload,
	handleDelete,
	...props
}) => {
	const classes = useStyles()
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

	const handleDownloadClick = () =>
		window.open(fileUrl, '_blank')

	return (
		<div>
			{fileUrl && !isEditing && (
				<>
					<Button onClick={handleDownloadClick}>
						<InsertDriveFile className={classes.icon} />
					</Button>
					{handleDelete && (
						<Button
							className={classes.button}
							size="small"
							onClick={handleDelete}
						>
							Remove
						</Button>
					)}
				</>
			)}

			{isEditing ||
				(!fileUrl && (
					<Dropzone
						className={classes.dropZone}
						disableClick={false}
						onDrop={onDrop}
						onDragEnter={onDragEnter}
						onDragLeave={onDragLeave}
						multiple={false}
					>
						{!isUploaded &&
							!isUploading &&
							!dropzoneActive && (
								<Typography variant="overline">
									Upload file
								</Typography>
							)}

						{isUploaded && (
							<Typography variant="overline">
								Upload complete
							</Typography>
						)}

						{!isUploaded &&
							!isUploading &&
							dropzoneActive && (
								<Typography variant="overline">
									Drop file
								</Typography>
							)}

						{!isUploaded && isUploading && (
							<Typography variant="overline">
								Uploading ...
							</Typography>
						)}

						{isUploading && (
							<LinearProgress
								className={classes.progress}
							/>
						)}
					</Dropzone>
				))}
		</div>
	)
}

export default FileUploader

const useStyles = makeStyles((theme) => ({
	icon: {
		height: 48,
		width: 48,
		color: theme.palette.primary.main,
	},
	dropZone: {
		margin: 0,
		height: 140,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: `1px dotted ${theme.palette.text.secondary}`,
		backgroundColor: theme.palette.background.main,
		textAlign: 'center',
		marginBottom: theme.spacing(2),
	},
	button: {
		fontSize: 11,
	},
}))
