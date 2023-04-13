import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import MealDetails from "./MealDetails"
import { MEALS } from "../data/dummy-data"
import  mealStyles  from "../styles/MealStyles"

type Props = {
	id: number
	categoryIds: []
	title: string
	affordability: string
	complexity: string
	duration: number
	imageUrl: string
}

const MealCard: React.FC<Props> = ({
	id,
	title,
	duration,
	affordability,
	complexity,
	imageUrl,
}) => {
	return (
		<>
			<View style={styles.card}>
				<Image style={styles.cardImage} source={{ uri: imageUrl }} />
				<Text style={styles.title}>{title}</Text>
				<MealDetails duration={duration} affordability={affordability.toUpperCase()} complexity={complexity.toUpperCase()}/>
				
			</View>
		</>
	)
}
export default MealCard

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	card: {
		marginVertical: 20,
		marginHorizontal: 8,
		borderRadius: 8,
		backgroundColor: "white",
	},
	cardImage: {
		width: "100%",
		height: 200,
	},

})