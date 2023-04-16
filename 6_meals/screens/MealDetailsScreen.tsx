import { Image, Pressable, ScrollView, StyleSheet } from "react-native"
// import useStore from "../store/Zustand"
import { useState } from "react"
import { Div, Text} from "react-native-magnus"
import MealButton from "../components/MealButton"
import MealDetails from "../components/MealDetails"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy-data"

type Props = {
	route: {
		params: {
			id: { id: string }
		}
	}
}

type Favorite = {
	id: string
}

function MealDetailsScreen(props: Props) {
	const [favorite, setFavorite] = useState(false)
	const [favorites, setFavorites] = useState<Favorite[]>([])

	// const MealDetailsScreen: React.FC<Props> = (itemData) => {
	const mealId = props.route.params
	const meal = MEALS.find((item) => item.id === mealId)

	function favoriteToggle() {
		const inputFave = { id: mealId }
		// setFavorites((favorites) => [...favorites, inputFave])
		favorite ? setFavorite(false) : setFavorite(true)
	}

	/*PSEUDO ->
		You have the meal id already, you needed it to populate the meal
		1. import zustand store
		2. favoriteToggle has new functions:
				addFavorite, remove favorite
		Context version of variable
		const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

	*/
	return (
		<ScrollView>
			<Div alignItems="center">
				<Image
					style={styles.image}
					source={{ uri: meal ? meal.imageUrl : null }}
				/>
				<Text style={styles.title}>{meal ? meal.title : null}</Text>
				{meal && (
					<MealDetails
						duration={meal.duration}
						affordability={meal.affordability.toUpperCase()}
						complexity={meal.complexity.toUpperCase()}
					/>
				)}
				<MealButton favoriteToggle={favoriteToggle} favorite={favorite} />
				<MealList
					listTitle={"Ingredients"}
					list={meal ? meal.ingredients : null}
				/>
				<MealList listTitle={"Steps"} list={meal ? meal.steps : null} />
			</Div>
		</ScrollView>
	)
}
export default MealDetailsScreen

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
	image: {
		marginBottom: 10,
		width: "100%",
		height: 350,
	},

})
