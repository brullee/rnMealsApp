import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ navigation, route }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  // useEffect works however, the name changes after the screen change so the delay is a little jarring
  // useLayoutEffect runs not after, but simultaneously with the render function
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => catId === category.id
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
