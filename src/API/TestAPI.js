import axios from "axios";

const axiosInstance = axios.create({
	// baseURL: "http://127.0.0.1:8000/",
	baseURL: "http://home.ferrion.tech/",
	withCredentials: true
});

// export const fetchLogin = () => {
// 	return axiosInstance.get(`api/login`);
// }

export const fetchLoginTest = () => {
	let a = axiosInstance.get(`test/hello`);
	console.log("from api file - ", a);
	return a;
}