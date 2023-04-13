import { Pressable, StyleSheet, Text, View } from "react-native"

type CategoryProps = {
	title: String,
	color: String,
	onPress: any,
}

function CategoryGridTile(props: CategoryProps) {
	return (
		<View style={[styles.tile, { backgroundColor: props.color }]}>
			<Pressable onPress={props.onPress}>
			<Text style={styles.title} >{props.title}</Text>
			</Pressable>
		</View>
	)
}
export default CategoryGridTile

const styles = StyleSheet.create({
	tile: {
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		width: 150,
		height: 150,
		margin: 16, 
		borderRadius: 8,
		elevation: 4,
		shadowColor: "black",
		// shadowOpacity: 0.8,
		shadowRadius: 10,
		shadowOffset: {width: 0, height: 2,}
	 },
	title: {
		fontWeight:"bold",
		fontSize: 18,
	}
})
