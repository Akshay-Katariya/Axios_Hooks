export const responseHandler = (response) => {
	return response.data
}

export const catchHandler = (error) => {
	if (error.response) {
		console.log('Problem with response=>', error.response.data)
		switch (error.response.status) {
			case 401:
				alert(`Error${error.response.status}`)
				break

			case 404:
				alert(`Error${error.response.status}`)
				break

			case 409:
				alert(`Error${error.response.status}`)
				break

			default:
				alert('Something went wrong')
				break
		}
	} else if (error.request) {
		console.log('Problem with request=>', error.request)
	} else {
		console.log('Error=>', error.message)
	}
}

export const noInternetHandler = () => {
	alert('Please connect to Internet and try again !')
}
