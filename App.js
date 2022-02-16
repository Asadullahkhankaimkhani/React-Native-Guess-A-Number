import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRounds(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  const handleGameOver = (numberOfRound) => {
    setRounds(numberOfRound);
  };

  if (userNumber && rounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={handleGameOver} />
    );
  } else if (rounds > 0) {
    content = <GameOverScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess The Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
