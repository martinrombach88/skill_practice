import React from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"
import { useNavigation } from "@react-navigation/native"
import { FlatList, Pressable, StyleSheet, View } from "react-native"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import MealCard from "../components/MealCard"
import { useLayoutEffect } from "react"

type PropId = {
	route: {
		params: {
			id: { id: string }
		}
	}
}

type ItemData = {
	item: {
		id: number
		categoryIds: []
		title: string
		color: string
		affordability: string
		complexity: string
		imageUrl: string
		duration: number
	}
}

function MealsOverviewScreen(id: PropId) {
	// const MealsOverviewScreen: React.FC<Props> = (props) => {
	const catId = id.route.params
	const categoryNav =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>()

	//if meals for categoryid > 0, return array of meals
	const meals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0
	})

	//runs before re-render. updates on change of catId or categoryNav
	useLayoutEffect(() => {
		//categoryTitle -> loop over CATEGORIES, if element matches catId, catTitle = that id's title
		const categoryTitle = CATEGORIES
			? CATEGORIES.find((category) => category.id === catId).title
			: null
		//set options of the header of the navigator dynamically to categoryTitle
		categoryNav.setOptions({
			title: categoryTitle,
		})
	}, [catId, categoryNav])

	function renderMealItem(itemData: ItemData) {
		//Navigate to Meal Details Screen, display meal details
		function navigateToDetails() {
			const item = itemData.item.id
			//@ts-ignore -> Argument of type 'number | null' is not assignable to parameter of type '{ route: { params: { id: { id: string; };
			categoryNav.navigate("MealDetailsScreen", item ? item : null)
		}
		return (
			<Pressable onPress={navigateToDetails}>
				<MealCard
					id={itemData.item.id}
					categoryIds={itemData.item.categoryIds}
					title={itemData.item.title}
					affordability={itemData.item.affordability}
					complexity={itemData.item.complexity}
					duration={itemData.item.duration}
					imageUrl={itemData.item.imageUrl}
				/>
			</Pressable>
		)
	}

	return (
		<View>
			{/* @ts-ignore -> Type 'Meal[]' is not assignable to type 'ArrayLike<{ id: number; categoryIds: []; title: string; color: string; affordability: string; complexity: string; imageUrl: string; duration: number; ingredients: string; steps: string; isGlutenFree: boolean; isVegan: boolean; isVegetarian: boolean; isLactoseFree: boolean; }>'.*/}
			<FlatList data={meals} renderItem={renderMealItem} />
		</View>
	)
}
export default MealsOverviewScreen

const styles = StyleSheet.create({})
