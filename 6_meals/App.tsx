import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
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
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'react-native-magnus';
import Theme from "./theme/Theme"

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
	console.log(Theme)

	return (
		<Drawer.Navigator
			screenOptions={{
				//Can't import theme into navigator
				//This is just another component, so import here and import everywhere the same way
				// headerStyle: { backgroundColor: "bg100" },
				headerStyle: { backgroundColor: "#D0E7E0" },
				// header font
				headerTintColor: "#0A0438",
			}}
		>
			<Drawer.Screen
				name="CategoriesScreen"
				component={CategoriesScreen}
				options={{
					title: "Browse Recipes",
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
		<ThemeProvider theme={Theme.default}>
			<StatusBar style="dark" />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName={"CategoriesScreen"}
					screenOptions={{
						
						headerStyle: { backgroundColor: "#D0E7E0" },
						
						// header font
						headerTintColor: "#0A0438",
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
			</ThemeProvider>
		</>
	)
}

export default App

AppRegistry.registerComponent('main', () => App)

