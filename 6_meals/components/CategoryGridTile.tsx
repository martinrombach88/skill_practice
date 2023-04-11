import { Pressable, StyleSheet, Text, View } from "react-native"

type CategoryProps = {
	title: String,
	color: String,
	onPress: any,
}

function CategoryGridTile(props: CategoryProps) {

/*
You can enforce/inform the prop types like this:

const useStyles = createUseStyles ({
  wrapper: (props: { color: colors }) => ({
    backgroundColor: props.color,
  }),
});
colors is an enum I have in another file:

export enum colors {
  primaryBlue = '#2b27e2',
  primaryOrange = '#ff8d69',
  primaryBlack = '#0a0d3d',
  primaryRed = '#ff1654',
}
This approach "works" but it is extremely clunky and verbose.
I have run in to a similar TS issue when trying to use a theme, 
*/

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
