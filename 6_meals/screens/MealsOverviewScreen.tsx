import React from "react"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from "../App";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealCard from "../components/MealCard"

type Props = NativeStackNavigationProp<StackParamList, "MealsOverview", "MyStack">

function MealsOverviewScreen(){

	return (
		<View>
			<MealCard />
		</View>
	)
}
export default MealsOverviewScreen

const styles = StyleSheet.create({})
