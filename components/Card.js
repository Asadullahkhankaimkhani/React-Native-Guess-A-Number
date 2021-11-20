import { View, StyleSheet } from "react-native";
import React from "react";

const Card = ({ style, children }) => {
  return <View style={{ ...styles.inputContainer, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  inputContainer: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 10,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
