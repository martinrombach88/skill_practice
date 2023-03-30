import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <>
      <View style={styles.goalItemContainer}>
        <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}>
          <Text style={styles.goalItem}>{props.text}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItemContainer: {
    backgroundColor: "#8543E3",
    width: 300,
    margin: 8,
    borderRadius: 8,
  },

  goalItem: {
    color: "white",
    padding: 8,
  },
});
