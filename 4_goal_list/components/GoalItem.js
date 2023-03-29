import { View, Text } from "react-native";

const GoalItem = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

export default GoalItem;
