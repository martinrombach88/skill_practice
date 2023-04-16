import { StyleSheet} from "react-native"
import { Div, Text } from "react-native-magnus"

type List = {
	listTitle: string
	list: []
}

function MealList({ list, listTitle }: List) {
	// const MealList: React.FC<List> = ({ listTitle, list }) => {
	const renderedList = list
		? list.map((item) => (
				<Div key={item} rounded={"lg"} bg={"#9973A7"} m={8}>
					<Text w={300} p={8} fontSize={16} color={"white"} textAlign="center">{item}</Text>
				</Div>
		  ))
		: null

	return (
		<Div>
			<Div borderColor="black" borderBottomWidth={2} my={4}>
				<Text fontSize={22} textAlign="center" my={12}>{listTitle}</Text>
			</Div>
			{renderedList}
		</Div>
	)
}
export default MealList
