import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from "react-file-base64";
import {
	IconButton,
	Modal,
	TextField,
	TextareaAutosize,
	Typography,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

import { modalState$ } from "../../redux/selectors";
import useStyles from "./styles";
import { createPosts, hideModal } from "../../redux/actions";

export default function CreatePostModals() {
	const [data, setData] = React.useState({
		title: "",
		content: "",
		attachment: "",
	});

	//Calling API to get data
	const dispatch = useDispatch();
	const { isShow } = useSelector(modalState$);
	const classes = useStyles();

	const onClose = React.useCallback(() => {
		dispatch(hideModal());
		setData({
			title: "",
			content: "",
			attachment: "",
		});
	}, [dispatch]);
	const onSubmit = React.useCallback(() => {
		dispatch(createPosts.createPostsRequest(data));
	}, [data, dispatch]);

	const body = (
		<div className={classes.popup} id="simple-modal-title">
			<IconButton
				display="flex"
				variant="contained"
				className={classes.closeButton}
				onClick={onClose}
			>
				<CloseIcon />
			</IconButton>
			<Typography
				display="flex"
				variant="h6"
				align="center"
				className={classes.typography}
			>
				Create New Post
			</Typography>
			<form noValidate autoComplete="off" className={classes.form}>
				<TextField
					className={classes.title}
					label="Title"
					value={data.title}
					onChange={(e) =>
						setData({ ...data, title: e.target.value })
					}
				/>
				<TextareaAutosize
					className={classes.textarea}
					maxRows={15}
					minRows={10}
					placeholder="Content..."
					value={data.content}
					onChange={(e) =>
						setData({ ...data, content: e.target.value })
					}
				/>
				<FileBase64
					accept="image/*"
					multiple={false}
					type="file"
					value={data.attachment}
					onDone={({ base64 }) =>
						setData({ ...data, attachment: base64 })
					}
				/>
				<IconButton
					className={classes.doneButton}
					onClick={onSubmit}
					onClose={onClose}
				>
					<DoneIcon />
				</IconButton>
			</form>
		</div>
	);
	console.log({ isShow });
	return (
		<div>
			<Modal open={isShow} onClose={onClose}>
				{body}
			</Modal>
		</div>
	);
}
