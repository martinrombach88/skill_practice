import { useLayoutEffect, useContext } from "react"
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/MealDetail/List"
import IconButton from "../components/IconButton"
import { MEALS } from "../data/dummy-data"
import { FavoritesContext } from "../store/context/favorites-context"

function MealDetailsScreen({ route, navigation }) {
	const favoriteMealsCtx = useContext(FavoritesContext)

	const mealId = route.params.mealId

	const selectedMeal = MEALS.find((meal) => meal.id === mealId)

	function changeFavoriteStatusHandler() {
		if (mealIsFavorite) {
			favoriteMealsCtx.removeFavorite(mealId)
		} else {
			favoriteMealsCtx.addFavorite(mealId)
		}
	}

	const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						onPress={changeFavoriteStatusHandler}
						color={"white"}
						icon={mealIsFavorite ? "star" : "star-outline"}
					/>
				)
			},
		})
	}, [navigation, changeFavoriteStatusHandler])

	return (
		<ScrollView style={styles.root}>
			<Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails
				affordability={selectedMeal.affordability}
				complexity={selectedMeal.complexity}
				duration={selectedMeal.duration}
				textStyle={styles.detailText}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	)
}
export default MealDetailsScreen

const styles = StyleSheet.create({
	root: { marginBottom: 32 },
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "white",
	},
	detailText: {
		color: "white",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: { width: "80%" },
})
