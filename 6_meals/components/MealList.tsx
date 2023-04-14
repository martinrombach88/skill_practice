import { FlatList, StyleSheet, Text, View } from "react-native"

type List = {
	listTitle: string
	list: []
}

function MealList({ list, listTitle }: List) {
	// const MealList: React.FC<List> = ({ listTitle, list }) => {
	const renderedList = list
		? list.map((item) => (
				<View key={item} style={styles.listItem}>
					<Text style={styles.listItemText}>{item}</Text>
				</View>
		  ))
		: null

	return (
		<View>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{listTitle}</Text>
			</View>

			{renderedList}
		</View>
	)
}
export default MealList

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	titleContainer: {
		borderColor: "black",
		borderBottomWidth: 2,
	},
	title: {
		fontSize: 22,
		textAlign: "center",
		marginVertical: 12,
	},
	listItem: {
		backgroundColor: "#9973A7",
		borderRadius: 8,
		margin: 8,
		textAlign: "center",
		width: 300,
	},
	listItemText: {
		color: "white",
		fontSize: 16,
		textAlign: "center",
		padding: 8,
	},
})
