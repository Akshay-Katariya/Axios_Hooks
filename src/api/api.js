import axios from 'axios'
import NetInfo from '@react-native-community/netinfo'
import {noInternetHandler, errorHandler} from './helper'

let isInternetAvailable = false

export const API = axios.create({
	baseURL: `http://jsonplaceholder.typicode.com/`,
})

let getToken = () => {
	//return token from lcal storage
	return 'f5af9f51-07e6-4332-8f1a-c0c11c1e3728'
}

//Global axios defaults
API.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`
API.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

/**
 * Override timeout default for the library
 * Now all requests will wait 5 seconds before timing out
 **/
API.defaults.timeout = 5000

// Add a request interceptor
API.interceptors.request.use(
	async (config) => {
		await NetInfo.fetch().then((state) => (isInternetAvailable = state.isConnected))
		if (!isInternetAvailable) noInternetHandler()
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

// //Add a response interceptor
API.interceptors.response.use(
	(response) => response.data,
	(error) => errorHandler(error)
)
