import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
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
  //Delete goals on click

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
      //Only managed to generate random ids, not sequential ids. Possible update.
    ]);
    closeModal();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.modalButton}>
          <Button title="Add Goal" color={"#A675E6"} onPress={openModal} />
        </View>
        <GoalInput
          onAddGoal={addGoalHandler}
          modalVisible={modalVisible}
          closeModal={closeModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(goal) => {
              return (
                <GoalItem
                  text={goal.item.text}
                  id={goal.item.id}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
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
    paddingTop: 50,
    //paddingTop 80% -> temporary? this should be achieved with justify/align and the right boxes?
    //modal will change it anyway
    backgroundColor: "#1e085a",
  },
  modalButton: {
    width: 350,
    marginBottom: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
