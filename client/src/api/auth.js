import axios from "axios";

const URL = "http://localhost:5000";

export const fetchUsers = () => axios.get(`${URL}/auth/get/`);
export const regsiterUsers = (payload) =>
	axios.post(`${URL}/auth/register`, payload);
// export const updateUsers = (payload) =>
// 	axios.post(`${URL}/posts/update`, payload);
