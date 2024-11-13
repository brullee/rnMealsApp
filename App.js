import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="CategoriesScreen">
            {/* initialRouteName sets the default screen, if not specified the default behavior is: the top most item gets set as the default screen*/}
            <Stack.Screen name="MealCategories" component={CategoriesScreen} />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({});
