import React from "react";
import { Container } from "@material-ui/core";

import useStyles from "../PostsPage/PostsPageStyles";

export default function HomePage() {
	const classes = useStyles();

	return (
		<Container className={classes.container}>
			<h1>This is signin </h1>
		</Container>
	);
}
