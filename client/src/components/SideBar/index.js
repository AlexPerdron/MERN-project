import React from "react";
// import { Link } from 'react-router-dom';

import { Typography, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PostIcon from "@material-ui/icons/Description";

import useStyles from "./styles";
import { useDispatch } from "react-redux";

export default function SideBar() {
	const classes = useStyles();
	const dispatch = useDispatch();

	const openHomePage = React.useCallback(() => {
		dispatch(openHomePage);
	}, [dispatch]);
	return (
		<div className={classes.container}>
			<IconButton
				display="flex"
				algin="left"
				className={classes.button}
				onClick={""}
			>
				<HomeIcon />
				<Typography className={classes.typography}>Home</Typography>
			</IconButton>
			<IconButton display="flex" algin="left" className={classes.button}>
				<PostIcon />
				<Typography className={classes.typography}>Posts</Typography>
			</IconButton>
		</div>
	);
}
