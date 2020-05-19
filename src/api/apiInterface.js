import {API} from './api'

export const getUserList = () => {
	return API.get('users').catch((e) => console.log(e))
}
