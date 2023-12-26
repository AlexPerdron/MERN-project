import React from "react";
import { Typography, IconButton } from "@material-ui/core";

import AccountIcon from "@material-ui/icons/AccountCircle";

import useStyles from "./styles";
import Logo from "../../asset/logo.png";
import { useDispatch } from "react-redux";

export default function Header() {
	const classes = useStyles();
	const dispatch = useDispatch();

	const openAccountScrolldown = React.useCallback(() => {
		dispatch();
	}, [dispatch]);
	return (
		<div display="flex" className={classes.container}>
			<img src={Logo} className={classes.logo} alt="logo" />
			<Typography
				display="flex"
				variant="h4"
				align="center"
				className={classes.typography}
			>
				Blog
			</Typography>
			<IconButton display="flex" align="right" className={classes.button}>
				<Typography
					display="flex"
					variant="body1"
					align="right"
					className={classes.button_typography}
					onClick={openAccountScrolldown}
				>
					account
				</Typography>
				<AccountIcon fontSize="large" />
			</IconButton>
		</div>
	);
	// writitng the router
}
