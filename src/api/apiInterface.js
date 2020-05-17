import {API} from './api'
import {catchHandler, responseHandler} from './helper'

export const getUserList = () => {
	return API.get('userss').then(responseHandler).catch(catchHandler)
}
