import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import CategoriesScreen from "./screens/CategoriesScreen"
//If an item doesn't import, it means you need a { } around it
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: "#692B1E"},
						// header font
						headerTintColor: "white",
						contentStyle: { backgroundColor: "#3f2f25" },
					}}
				>
					<Stack.Screen name={"Categories"} component={CategoriesScreen} />
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
