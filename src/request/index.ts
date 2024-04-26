import axios from "axios";

let getToken = function () {
    return localStorage.getItem("token")
}

let axiosInstance = axios.create({
    baseURL: "http://localhost:80",
    headers: {
        "Content-Type": "application/json"
    }
});
axiosInstance.interceptors.request.use(
    (config) => {
        let token = getToken();
        if (token) {
            config.headers.token = token
        }
        return config
    },
    (error) => {
        console.log(error);
    })
// 响应拦截器
axiosInstance.interceptors.response.use(
    (resp) => {
        return resp
    },
    (error) => {
        console.log(error);
        return Promise.reject("响应获取失败")
    })
export default axiosInstance