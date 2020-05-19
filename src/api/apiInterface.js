import {API} from './api'

/**
 * Manage all API calls from here
 * No need to add header explicitly its already managed via global config
 * You can always override global config for individual request from here
 **/

export const getUserList = () => {
	return API.get('users').catch((e) => console.log(e))
}

export const getUserPost = (userID) => {
	return API.get(`users/${userID}/posts`).catch((e) => console.log(e))
}

export const postUserData = (requestBody) => {
	API.post('posts', requestBody).catch((e) => console.log(e))
}
