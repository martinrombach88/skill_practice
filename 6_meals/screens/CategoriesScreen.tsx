import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"
import { useNavigation } from "@react-navigation/native"
import { FlatList, StyleSheet, View } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"
import { CATEGORIES } from "../data/dummy-data"
import { Div, Text} from "react-native-magnus"

type ItemData = {
	item: {
		id: string
		categoryIds: []
		title: string
		image: string
	}
}


function CategoriesScreen() {
	//Navigation function imports params from App.js navigator
	const categoryNav =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>()

	function renderCategory(itemData: ItemData) {
		function navigateToOverview() {
			//Error: Argument of type 'string' is not assignable to parameter of type '{ route: { params: { id: { id: string; }; }; }; }'
			//@ts-ignore
			categoryNav.navigate("MealsOverviewScreen", itemData.item.id)
		}
		return (
			<CategoryGridTile
				title={itemData.item.title}
				image={itemData.item.image}
				onPress={navigateToOverview}
			/>
		)
	}

	return (
		<Div style={styles.categoryContainer}>
			<FlatList
				data={CATEGORIES} //individual item is a param to renderItem
				renderItem={renderCategory}
				numColumns={2}
				keyExtractor={(item) => item.id}
			/>
		</Div>
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
