import { createActions } from 'redux-actions';

export const getType = (reduxActions) => {
    return reduxActions().type;
}
export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (err) => err,
});