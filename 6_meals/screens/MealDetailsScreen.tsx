import {
	Button,
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native"
// import useStore from "../store/Zustand"
import { useState } from "react"
import MealDetails from "../components/MealDetails"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy-data"
import { Entypo } from "@expo/vector-icons"

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
	const[favorites, setFavorites] = useState<Favorite[]>([])


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
			<View style={styles.container}>
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
				<Pressable onPress={favoriteToggle}>
					<View
						style={[
							styles.favoriteButton,
							favorite
								? styles.favoriteButtonActive
								: styles.favoriteButtonInActive,
						]}
					>
						<View style={styles.favoriteIconContainer}>
							{favorite ? (
								<Entypo name="star" size={24} color="white" />
							) : (
								<Entypo name="star-outlined" size={24} color="white" />
							)}
						</View>
						<View style={styles.favoriteTextContainer}>
							<Text style={styles.favoriteText}>
								{favorite ? "Remove Favorite" : "Add Favorite"}
							</Text>
						</View>
					</View>
				</Pressable>
				{/* <Button title={"Add to Favorites"} /> */}
				<MealList
					listTitle={"Ingredients"}
					list={meal ? meal.ingredients : null}
				/>
				<MealList listTitle={"Steps"} list={meal ? meal.steps : null} />
			</View>
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
	favoriteButton: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		borderRadius: 8,
	},
	favoriteIconContainer: {
		alignItems: "center",
		justifyContent: "center",
		width: 40,
	},
	favoriteButtonActive: {
		backgroundColor: "#76A773",
	},
	favoriteButtonInActive: {
		backgroundColor: "black",
	},
	favoriteTextContainer: {
		alignItems: "center",
		justifyContent: "center",
		width: 140,
	},
	favoriteText: {
		color: "white",
		padding: 8,
	},
})
