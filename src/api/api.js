import axios from 'axios'
import NetInfo from '@react-native-community/netinfo'
import {noInternetHandler} from './helper'

let isInternetAvailable = false

export const API = axios.create({
	baseURL: `http://jsonplaceholder.typicode.com/`,
})

// Add a request interceptor
API.interceptors.request.use(
	async (config) => {
		await NetInfo.fetch().then((state) => (isInternetAvailable = state.isConnected))
		if (!isInternetAvailable) noInternetHandler()
		return config
	},
	(error) => {
		console.log('Interceptor error', error)
		return Promise.reject(error)
	},
)
