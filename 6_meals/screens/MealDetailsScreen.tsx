import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

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
function MealDetailsScreen(props: Props) {
	// const MealDetailsScreen: React.FC<Props> = (itemData) => {
	const mealId = props.route.params
	const meal = MEALS.find((item) => item.id === mealId)

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
})
