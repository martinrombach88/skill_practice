import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
//If an item doesn't import, it means you need a { } around it
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CategoriesScreen from "./screens/CategoriesScreen"
import MealsOverviewScreen from "./screens/MealsOverviewScreen"

//Params are set up for each screen
export type RootStackParamList = {
	Categories: undefined;
	MealsOverview: {
		id: string
	};
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName={"Categories"}
					screenOptions={{
						headerStyle: { backgroundColor: "#692B1E" },
						// header font
						headerTintColor: "white",
						contentStyle: { backgroundColor: "#3f2f25" },
					}}
				>
					<Stack.Screen name={"Categories"} component={CategoriesScreen} />
					<Stack.Screen
						name={"MealsOverview"}
						component={MealsOverviewScreen}
						initialParams={{id: ""}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
