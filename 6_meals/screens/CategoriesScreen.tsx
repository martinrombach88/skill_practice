import { FlatList, StyleSheet, Text, View } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"
import { CATEGORIES } from "../data/dummy-data"


//How do you import the navigation via Typescript?
//Use the 'any' type for now

// function CategoriesScreen({ navigation }) {
function CategoriesScreen() {
	function renderCategory(itemData : any) {
		function testId() {
			console.log(itemData.item.id);
		}
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={testId}
			/>
		)
	}

	return (
		<View style={styles.categoryContainer}>
			<FlatList
				data={CATEGORIES}
				renderItem={renderCategory}
				numColumns={2}
			/>
		</View>
	)
}
export default CategoriesScreen

const styles = StyleSheet.create({
	categoryContainer: {
		flex: 1,

		alignItems: "center",
		paddingTop: 20,
	},
})
