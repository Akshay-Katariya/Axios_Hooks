import React, {useState} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {Appbar, Button} from 'react-native-paper'
import {getUserList} from './src/api/apiInterface'
import {isObjectDefined, isArrayDefined} from './src/utils/CommonUtil'

let App = () => {
	const [name, setName] = useState('Name:')

	let callApi = async () => {
		let response = await getUserList()
		isObjectDefined(response) && isArrayDefined(response.data) ? setName(`Name : ${response.data[0].name}`) : null
	}

	return (
		<View style={styles.root}>
			<Appbar.Header>
				<Appbar.Content title='Axios' />
			</Appbar.Header>
			<View style={styles.container}>
				<Text>{name}</Text>
				<Button style={{marginVertical: 10}} mode='contained' onPress={() => callApi()}>
					Call Api
				</Button>
			</View>
		</View>
	)
}

export default App

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
