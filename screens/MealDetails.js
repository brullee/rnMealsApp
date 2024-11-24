import { View, Text } from "react-native";

function MealDetails({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>meal {mealId}</Text>
    </View>
  );
}

export default MealDetails;
