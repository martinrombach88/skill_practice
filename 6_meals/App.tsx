import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
//If an item doesn't import, it means you need a { } around it
// import { createStackNavigator } from "@react-navigation/stack"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigationContainer, Route } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import CategoriesScreen from "./screens/CategoriesScreen"
import MealsOverviewScreen from "./screens/MealsOverviewScreen"
import MealDetailsScreen from "./screens/MealDetailsScreen"
import FavoritesScreen from "./screens/FavoritesScreen"
import { Ionicons } from "@expo/vector-icons"

//Params are set up for each screen
export type RootStackParamList = {
	CategoriesScreen: undefined
	MealsOverviewScreen: {
		route: {
			params: {
				id: { id: string }
			}
		}
	}
	MealDetailsScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: "black" },
				// header font
				headerTintColor: "white",
			}}
		>
			<Drawer.Screen
				name="CategoriesScreen"
				component={CategoriesScreen}
				options={{
					title: "All Categories",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name="FavoritesScreen"
				component={FavoritesScreen}
				options={{
					title: "Favorites",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	)
}

function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName={"CategoriesScreen"}
					screenOptions={{
						headerStyle: { backgroundColor: "black" },
						// header font
						headerTintColor: "white",
					}}
				>
					<Stack.Screen
						name="Drawer"
						component={DrawerNavigator}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name={"MealsOverviewScreen"}
						//@ts-ignore
						component={MealsOverviewScreen}
					/>
					<Stack.Screen
						// Error: Type '(props: Props) => Element' is not assignable to type 'ScreenComponentType<RootStackParamList, "MealDetailsScreen"> | undefined'.
						// Type '(props: Props) => Element' is not assignable to type 'FunctionComponent<{}>'.
						// Types of parameters 'props' and 'props' are incompatible.
						name={"MealDetailsScreen"}
						//@ts-ignore
						component={MealDetailsScreen}
						options={{ title: "About The Meal" }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	)
}

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
