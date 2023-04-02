import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductPage from "./screens/ProductPage/ProductPage";
import SearchPage from "./screens/SearchPage/SearchPage";

function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchPage navigation={navigation} />
      {/* <ProductPage navigation={navigation} /> */}
    </View>
  );
}

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search Amazon"
          component={SearchScreen}
          navigation={Stack}
        />
        <Stack.Screen
          name="Product Page"
          component={ProductPage}
          navigation={Stack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
