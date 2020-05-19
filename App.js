import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, ActivityIndicator, SafeAreaView} from 'react-native'
import {getUserList} from './src/api/apiInterface'
import {isArrayDefined} from './src/utils/CommonUtil'

export default App = () => {
	const [users, setUsers] = useState([])
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		callApi()
	}, []) //[] argument is similar to componentDidMount

	let callApi = async () => {
		setLoading(true)
		let response = await getUserList()
		isArrayDefined(response) ? setUsers(response) : setUsers([])
		setLoading(false)
	}

	Item = ({name}) => {
		return (
			<View style={styles.item}>
				<Text style={styles.name}>{name}</Text>
			</View>
		)
	}

	return (
		<SafeAreaView style={styles.root}>
			{isLoading ? <ActivityIndicator style={styles.indicator} /> : null}
			<FlatList
				data={users}
				renderItem={({item}) => <Item name={item.name} />}
				keyExtractor={(item) => item.id.toString()}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	indicator: {
		marginTop: 40,
	},
	item: {
		backgroundColor: '#f2f2f2',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	name: {
		fontSize: 24,
	},
})
