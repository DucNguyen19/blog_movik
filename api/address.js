import axios, { Axios } from "axios";
import {
  deleteCookie,
  getCookie,
  setCookie,
} from "./cookies";
import Cookies from "js-cookie";
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
axios.defaults.baseURL = publicRuntimeConfig.baseUrl

export const setToken = (token) => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token}`;
};
// axios.defaults.baseURL = "http://localhost:4000/api/v1";

axios.interceptors.response.use(
  (response) => {
    if (response && response.status < 500) {
      return response;
    }
    throw new Error(
      response?.errors || "Response not handle"
    );
  },
  (error) => {
    const { response } = error;
    if (response && [401, 403].includes(response.status)) {
      if (typeof window !== "undefined") {
        window.localStorage?.removeItem("token");
        deleteCookie("token");
      }
      window.location.href = "/login";
    }
    // throw error
  }
);

// axios.interceptors.request.use(
// 	async (config) => {
// 		const token = Cookies.get("token");
// 		const refreshToken = Cookies.get("rf_token");
// 		if (token) {
// 			config.headers.Authorization = `Bearer ${token}`;
// 		}
// 		if (!token && refreshToken) {
// 			const result = await Axios.post(
// 				"http://localhost:3000/auth/refresh-token",
// 				{
// 					refresh_token: refreshToken,
// 				}
// 			);
// 			if (result?.data?.access_token) {
// 				Cookies.set(
// 					"token",
// 					result?.data?.access_token?.value,
// 					{
// 						expires:
// 							result?.data?.access_token?.expires_in /
// 							86400,
// 					}
// 				);
// 				config.headers.Authorization = `Bearer ${result?.data?.access_token?.value}`;
// 			}
// 		}
// 		return config;
// 	},
// 	(error) => Promise.reject(error)
// );


export const login = param => {
  return axios.post('/api/login', param)
}