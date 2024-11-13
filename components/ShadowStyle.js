import { Platform, StyleSheet } from "react-native";

const shadowStyle = StyleSheet.create({
  dropShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: "visible",
      },
      android: {
        elevation: 4,
        overflow: "hidden",
      },
    }),
  },
});

export default shadowStyle;
