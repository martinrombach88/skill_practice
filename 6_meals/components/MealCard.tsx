import { Image, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"

type Meal = {
	image: String
}

function MealCard() {
	return (
		<>
			<Image source={MEALS[0].imageUrl} />
			<Text>MealCard</Text>
		</>
	)
}
export default MealCard

const styles = StyleSheet.create({})
