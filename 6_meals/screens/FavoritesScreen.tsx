import { StyleSheet, Text, View } from "react-native"

function FavoritesScreen() {
	const favorites: boolean = false
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				{favorites
					? "Here are your favorites"
					: "You haven't added favorites yet."}
			</Text>
		</View>
	)
}
export default FavoritesScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
	},
})
