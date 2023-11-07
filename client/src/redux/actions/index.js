import { createActions, createAction } from "redux-actions";

export const getType = (reduxActions) => {
	return reduxActions().type;
};
export const getPosts = createActions({
	getPostsRequest: undefined,
	getPostsSuccess: (payload) => payload,
	getPostsFailure: (err) => err,
});

export const createPosts = createActions({
	createPostsRequest: (payload) => payload,
	createPostsSuccess: (payload) => payload,
	createPostsFailure: (err) => err,
});

export const showModal = createAction("SHOW_CREATE_POST_MODAL");
export const hideModal = createAction("HIDE_CREATE_POST_MODAL");
