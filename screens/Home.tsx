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
  Paragraph,
  Separator,
  Square,
  Image,
} from "tamagui";

import AppAlert from "../components/AppAlert";
import AppList from "../components/AppList";
import { ScreenContainer } from "../components/ScreenContainer";
import AppAccordion from "../components/AppAccordion";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackLists } from "../components/NavigationContainer";
import AvatarComponent from "../components/Avatat.component";
const MyView = styled(View, {
  borderWidth: 5,
  borderColor: "magenta",
  height: 100,
  width: "100%",
  my: 10,
});
type Props = NativeStackScreenProps<RootStackLists, "Home">;
export default function Home({ navigation }: Props) {
  const [text, setText] = React.useState("");
  return (
    <ScreenContainer title="Center">
      <View style={styles.container}>
        <H2 pb={3}> Explore Tamagui...</H2>
        <Text color="$color.primary">
          If you feel it could you let me know......i am not asking for
          miracle..
        </Text>
        <Text>I am not asking for a miracle....</Text>
        <Stack mt={25}>
          <Image source={require("../assets/home2-hero.jpg")} />
        </Stack>

        <AvatarComponent />

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
        <Button
          bg="magenta"
          color="white"
          mt={5}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </Button>
      </YStack>
      <Stack p={4}>
        <Paragraph>
          Tamagui UI, cross platform component for developing web and mobile
          applications.......
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          eveniet quia consequatur. Eligendi nesciunt nulla incidunt repellat
          eum obcaecati, sit excepturi commodi, error, non natus!
        </Paragraph>
        <Separator marginVertical={5} alignSelf="stretch" />
        <Square
          size={100}
          backgroundColor="rebeccapurple"
          margin={10}
          elevation={20}
        />
      </Stack>
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
