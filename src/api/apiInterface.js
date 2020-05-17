import {API} from './api'
import {catchHandler, responseHandler} from './helper'

export const getUserList = () => {
	return API.get('users').then(responseHandler).catch(catchHandler)
}
