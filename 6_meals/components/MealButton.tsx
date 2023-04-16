import { Div, Text, Icon, Button } from "react-native-magnus"
import { StyleSheet } from "react-native"
type Props = {
	favorite: boolean
	favoriteToggle: () => void
}
function MealButton(props: Props) {
	return (
		<Div flexDir="row" alignItems="center" justifyContent="center">
			{props.favorite ? (
				<Button
					w={180}
					h={50}
					bg="white"
					borderWidth={1}
					borderColor="green500"
					color="green500"
					underlayColor="green100"
					onPress={props.favoriteToggle}
				>
					Add Favorite
				</Button>
			) : (
				<Button
					w={180}
					h={50}
					bg="green500"
					color="white"
					underlayColor="green600"
					onPress={props.favoriteToggle}
				>
					Remove Favorite
				</Button>
			)}
		</Div>
	)
}
export default MealButton

const styles = StyleSheet.create({
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
