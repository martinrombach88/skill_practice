import { Pressable} from "react-native"
import { Div, Image, Text} from "react-native-magnus"

type CategoryProps = {
	title: string
	image: string
	onPress: () => void
}

function CategoryGridTile(props: CategoryProps) {
	return (
		<Div shadow="sm" bg="white" h={150} w={150} mx={16} my={20} rounded="lg" >
			<Pressable onPress={props.onPress}>
				<Image
					h={150}
					w={150}
					source={{
						uri: props.image,
					}}
					rounded="lg"
				/>
				<Text textAlign={"center"} fontSize={"2xl"} fontWeight={"bold"}>{props.title}</Text>
			</Pressable>
		</Div>
	)
}
export default CategoryGridTile


