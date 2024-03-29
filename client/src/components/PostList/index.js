import React from "react";
import { Grid } from "@material-ui/core";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";

export default function PostList() {
	//Calling API to get data
	const dispatch = useDispatch();
	const posts = useSelector(postsState$);

	console.log("[PostList - posts]", posts);

	React.useEffect(() => {
		dispatch(actions.getPosts.getPostsRequest());
	}, [dispatch]);

	//Post
	return (
		<Grid container spacing={2} aignment="stretch">
			{posts.map((post) => (
				<Grid key={post._id} item xs={12} sm={6}>
					<Post post={post} />
				</Grid>
			))}
		</Grid>
	);
}
