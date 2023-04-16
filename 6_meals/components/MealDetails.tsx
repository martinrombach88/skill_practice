import { Div, Text } from "react-native-magnus"

type Details = {
	duration: number
	affordability: string
	complexity: string
}
function MealDetails({ duration, affordability, complexity }: Details) {
	// const MealDetails: React.FC<Details> = ({duration, affordability, complexity}) => {

	return (
		<Div flexDir={"row"} w={"100%"} my={8} justifyContent="center">
			<Text fontWeight={"bold"} mx={10}>
				{duration} MIN
			</Text>
			<Text fontWeight={"bold"} mx={10}>
				{affordability.toUpperCase()}
			</Text>
			<Text fontWeight={"bold"} mx={10}>
				{complexity.toUpperCase()}
			</Text>
		</Div>
	)
}
export default MealDetails

