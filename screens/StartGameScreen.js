import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import Card from "../components/Card";
import colors from "../colors/constant";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card style={styles.inputContainer}>
        <TextInput />
        <View style={styles.buttonDisplay}>
          <View style={styles.button}>
            <Button title="Reset" color={colors.secondary} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonDisplay: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
