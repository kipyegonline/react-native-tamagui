import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button, styled, H1, H3, H2 } from "tamagui";

import AppAlert from "../components/AppAlert";
import AppList from "../components/AppList";
import { ScreenContainer } from "../components/ScreenContainer";
const MyView = styled(View, {
  borderWidth: 5,
  borderColor: "magenta",
  height: 100,
  width: "100%",
  my: 10,
});
export default function Home() {
  return (
    <ScreenContainer title="Center">
      <View style={styles.container}>
        <H2 pb={3}> Explore...</H2>
        <Text color="$color.primary">
          If you feel it could you let me know......i am not asking for
          miracle..
        </Text>
        <Text>I am not asking for a miracle....</Text>
        <Button onPress={() => {}} my={25} backgroundColor={"$red"}>
          What is tamagui?
        </Button>

        <MyView hoverStyle={{ backgroundColor: "cyan" }}></MyView>

        <AppAlert />
        <AppList />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 22,
    paddingHorizontal: 12,
  },
});
