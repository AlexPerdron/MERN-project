import React from "react";
import { Typography } from "@material-ui/core";
// import { IconButton } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
import useStyle from "./RegisterPopupStyles";

export default function RegisterPopup() {
	const classes = useStyle();

	return (
		<div className={classes.popup} id="register-user-popup">
			<Typography>This is popup</Typography>
		</div>
	);
}
