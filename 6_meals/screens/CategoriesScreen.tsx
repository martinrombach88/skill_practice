import { FlatList} from "react-native"
import { Div } from "react-native-magnus"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import CategoryGridTile from "../components/CategoryGridTile"
import { RootStackParamList } from "../App"
import { CATEGORIES } from "../data/dummy-data"


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
		<Div flex={1} alignItems="center" >
			<FlatList
				data={CATEGORIES} //individual item is a param to renderItem
				renderItem={renderCategory}
				numColumns={2}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
			/>
		</Div>
	)
}

export default CategoriesScreen

