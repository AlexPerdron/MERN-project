import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";
//generator funciton ES6
function* fetchPostSaga(action) {
	try {
		const posts = yield call(api.fetchPosts);
		console.log("[posts]", posts);
		yield put(actions.getPosts.getPostsSuccess(posts.data));
	} catch (err) {
		console.log(err);
		yield put(actions.getPosts.getPostsFailure(err));
	}
}
function* createPostSaga(action) {
	try {
        console.log("createPostSaga", { action });
		const posts = yield call(api.createPosts, action.payload);
		console.log("[createPostSaga - posts]", posts);
		yield put(actions.createPosts.createPostsSuccess(posts.data));
	} catch (err) {
		console.log(err);
		yield put(actions.createPosts.createPostsFailure(err));
	}
}
function* updatePostSaga(action) {
	try {
		console.log("updatePostSaga", { action });
		const updatePosts = yield call(api.updatePosts, action.payload);
		console.log("[updatePostSaga - posts]", updatePosts);
		yield put(actions.updatePosts.updatePostsSuccess(updatePosts.data));
	} catch (err) {
		console.log(err);
		yield put(actions.updatePosts.updatePostsFailure(err));
	}
}
function* mySaga() {
	yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
	yield takeLatest(actions.createPosts.createPostsRequest, createPostSaga);
	yield takeLatest(actions.updatePosts.updatePostsRequest, updatePostSaga);
}

export default mySaga;
