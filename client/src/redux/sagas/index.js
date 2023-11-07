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
		const posts = yield call(api.createPosts, action.payload);
		console.log("[createPostSaga - posts]", posts);
		yield put(actions.createPosts.createPostsSuccess(posts.data));
	} catch (err) {
		console.log(err);
		yield put(actions.createPosts.createPostsFailure(err));
	}
}
function* mySaga() {
	yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
    yield takeLatest(actions.createPosts.createPostsRequest, createPostSaga);

}

export default mySaga;
