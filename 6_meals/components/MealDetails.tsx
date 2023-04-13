import { StyleSheet, Text, View } from "react-native"
import mealStyles from "../styles/MealStyles"

type Details = {
	duration: number
	affordability: string,
	complexity: string,
}
function MealDetails({duration, affordability, complexity}: Details) {
// const MealDetails: React.FC<Details> = ({duration, affordability, complexity}) => {
	return (
		<View style={styles.details}>
			<Text style={styles.detailsText}>{duration} MIN</Text>
			<Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
			<Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
		</View>
	)
}
export default MealDetails

const styles = StyleSheet.create({
	details: {
		flexDirection: "row",
		width: "100%",
		marginVertical: 8,
		justifyContent: "center"
	},
	detailsText: {
		fontWeight: "bold",
		marginHorizontal: 10,
	}
})
