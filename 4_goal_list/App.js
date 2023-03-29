import { useState } from "react";
import {
  Button,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

/*
    Process (after Modal opened):
    1. Function uses onChangeText attribute to listen to user input 
    2. State enteredGoalText is updated with user changes
    3. onPress of Add Goal Button, addGoalHandler triggered
    4. addGoalHandler passes enteredGoalText to prop function passed from App.js
    6. App.js Goal Handler passes a function to setCourseGoals state with enteredGoalText state string
    7. Makes an object from string and an random id 
    8. Destructures a copy of courseGoals, then adds object to end of courseGoals
    9. Value of TextInput updated to ""
*/

export default function App() {
  //Next:
  //Goal item is a separate component
  //Goal Input is a separate component in a modal

  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [idCount, setIdCount] = useState(0);

  const userInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    //set idCount to current
    //increment idCount for next round
    let id = idCount;
    const userInput = {
      id: id,
      text: enteredGoalText,
    };
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: userInput.text, key: userInput.id },
    ]);
    id++;
    setIdCount(id);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("./assets/images/goal.png")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Goal"
          onChangeText={userInputHandler}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" />
        {/* Closes modal */}
        {/* <Button color={"#D21999"} title="Cancel" /> */}
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      {/* <StatusBar style="auto" /> */}
      <FlatList
        data={courseGoals}
        renderItem={(goal) => {
          return <GoalItem text={goal.item.text} />;
          // return <Text key={goal.item.id}>{goal.item.text}</Text>;
        }}
      />
    </View>
  );
}

//FlatList takes up huge segment of the phone. Also not yet scrollable?
//Surely it should take up a normal amount of space and be scrollable.

//Generally need a better feel for the styling.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    // backgroundColor: "#1e085a",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "#1e085a",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  input: {
    marginTop: 8,
    padding: 8,
    borderWidth: 2,
    color: "black",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  goalsContainer: {},
});
