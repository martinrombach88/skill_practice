import { Div, Text } from "react-native-magnus"

function FavoritesScreen() {
	const favorites: boolean = false
	return (
		<Div flex={1} justifyContent="center" alignItems="center">
			<Text fontSize={20}>
				{favorites
					? "Here are your favorites"
					: "You haven't added favorites yet."}
			</Text>
		</Div>
	)
}
export default FavoritesScreen
