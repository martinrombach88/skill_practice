import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from "../App";
import { useNavigation } from "@react-navigation/native"
import { FlatList, StyleSheet, View } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"
import { CATEGORIES } from "../data/dummy-data"


function CategoriesScreen() {
//Navigation function imports params from App.js navigator 
	const categoryNav = useNavigation<NativeStackNavigationProp<RootStackParams>>()
	function renderCategory(itemData : any) {
		function navigateToOverview() {
			console.log(itemData.item.id)
			categoryNav.navigate("MealsOverview", itemData.item.id)
		}
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={navigateToOverview}
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
