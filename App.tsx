import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Alert as AL } from "react-native";
import {
  Button,
  XStack,
  YStack,
  Paragraph,
  Text,
  AlertDialog,
  styled,
} from "tamagui";
import AppContainer from "./components/AppContainer";
import AppAlert from "./components/AppAlert";
import AppList from "./components/AppList";

const MyView = styled(View, {
  borderWidth: 5,
  borderColor: "magenta",
  height: 100,
  width: "100%",
  my: 10,
});

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        <Text color="$color.primary">
          If you feel it could you let me know......
        </Text>
        <Text>I am not asking for a miracle....</Text>
        <Button onPress={() => {}} my={25} backgroundColor={"$red"}>
          What is tamagui?
        </Button>
        <MyView hoverStyle={{ backgroundColor: "cyan" }}></MyView>

        <AppAlert />
        <AppList />
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
