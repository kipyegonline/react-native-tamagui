import React from "react";
import { StyleSheet } from "react-native";
import {
  View,
  Text,
  Button,
  styled,
  H1,
  H3,
  H2,
  Stack,
  Label,
  TextArea,
  YStack,
  TextInput,
  Avatar,
  XStack,
} from "tamagui";

import AppAlert from "../components/AppAlert";
import AppList from "../components/AppList";
import { ScreenContainer } from "../components/ScreenContainer";
import AppAccordion from "../components/AppAccordion";
const MyView = styled(View, {
  borderWidth: 5,
  borderColor: "magenta",
  height: 100,
  width: "100%",
  my: 10,
});
export default function Home() {
  const [text, setText] = React.useState("");
  return (
    <ScreenContainer title="Center">
      <View style={styles.container}>
        <H2 pb={3}> Explore...</H2>
        <Text color="$color.primary">
          If you feel it could you let me know......i am not asking for
          miracle..
        </Text>
        <Text>I am not asking for a miracle....</Text>
        <XStack>
          <Avatar circular size={125}>
            <Avatar.Image src={require("../assets/icon.png")} />
          </Avatar>
        </XStack>

        <Button
          onPress={() => {}}
          my={25}
          //backgroundColor={"royalblue"}
          color="white"
          bg="royalblue"
        >
          This is tamagui
        </Button>

        <AppAlert />
        <AppList />
        <AppAccordion />
      </View>
      <YStack p={14}>
        <Label>Enter Message </Label>
        <TextArea
          onChangeText={(text) => setText(text)}
          value={text}
          borderWidth={2}
          // paddingVertical={0}

          p={6}
        />
        <Button bg="magenta" color="white" mt={5}>
          Submit
        </Button>
      </YStack>
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
