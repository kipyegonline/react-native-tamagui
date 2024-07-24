import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { Button, XStack, YStack, Paragraph, Text } from "tamagui";
import AppContainer from "./components/AppContainer";

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        <Text color="$color">If you feel it could you let me know......</Text>
        <StatusBar style="auto" />
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
