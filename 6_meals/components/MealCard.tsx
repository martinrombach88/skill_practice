import React from "react"
import MealDetails from "./MealDetails"
import { Div, Image, Text} from "react-native-magnus"

type Props = {
	categoryIds: []
	title: string
	affordability: string
	complexity: string
	duration: number
	imageUrl: string
}

const MealCard: React.FC<Props> = ({
	title,
	duration,
	affordability,
	complexity,
	imageUrl,
}) => {
	return (
		<>
			<Div my={12} mx={8} rounded="lg" bg="white" shadow="md"> 
				<Image h={200} w={"100%"} source={{ uri: imageUrl }} rounded="lg"/>
				<Text fontSize={20} fontWeight="bold" textAlign="center" pt={8}>{title}</Text>
				<MealDetails duration={duration} affordability={affordability.toUpperCase()} complexity={complexity.toUpperCase()}/>
			</Div>
		</>
	)
}
export default MealCard
