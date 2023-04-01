import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Header = (props) => {
  let location = "New York";
  return (
    <LinearGradient
      colors={["#83D4DE", "#A1E3CC"]}
      style={styles.searchContainer}
      start={{ x: 0.1, y: 0.4 }}
      end={{ x: 0.5, y: 0.4 }}
    >
      <View style={styles.searchBarContainer}>
        <Pressable onPress={() => props.navigation.navigate("Search Amazon")}>
          <AntDesign
            name="arrowleft"
            size={30}
            style={styles.searchIconLarge}
          />
        </Pressable>
        <View style={styles.searchBar}>
          <FontAwesome5 name="search" size={20} />
          <TextInput
            style={styles.searchFunction}
            placeholder="Search Amazon"
          />
          <Feather name="camera" size={24} style={styles.searchIcon} />
          <SimpleLineIcons
            name="microphone"
            size={24}
            style={styles.searchIcon}
          />
        </View>
      </View>
      <View style={styles.locationBar}>
        <EvilIcons name="location" size={34} color="black" />
        <Text style={styles.locationText}>Deliver to {location}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
  },
  //Search container has pixel height because
  //flex causes visual errors when search is triggered
  searchContainer: {
    height: 120,
    width: "100%",
    paddingTop: 20,
    paddingLeft: 10,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    margin: 6,
    width: "82%",
    paddingVertical: 8,
    paddingLeft: 10,
    borderRadius: 8,
  },
  searchFunction: {
    marginHorizontal: 8,
    fontSize: 16,
    width: "62%",
  },
  searchIcon: {
    color: "grey",
    paddingHorizontal: 8,
  },
  searchIconLarge: {
    marginHorizontal: 4,
    color: "black",
  },
  locationBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  locationText: {
    fontSize: 14,
  },
});

export default Header;
