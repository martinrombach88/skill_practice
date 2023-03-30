import { useState } from "react";
import {
  Image,
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const userInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  //1. App.js method addGoalHandler is passed to the 'onAddGoal' prop
  //2. 'Overloaded' Goal Input method addGoalHandler takes App.js version and calls it with local state.

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <>
      <Modal visible={props.modalVisible}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/goal.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Course Goal"
            onChangeText={userInputHandler}
            value={enteredGoalText}
          />

          <View style={styles.buttonContainer}>
            <Button
              color={"#D21999"}
              title="Cancel"
              onPress={props.closeModal}
            />
            <Button
              color={"#601BAB"}
              title="Add Goal"
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "#1e085a",
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  input: {
    backgroundColor: "#DFCDF1",
    marginTop: 8,
    padding: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});
