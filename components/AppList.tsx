import {
  Image,
  ListItem,
  Text,
  View,
  XStack,
  Avatar,
  YStack,
  Input,
  TextArea,
  Button,
} from "tamagui";
import React from "react";

export default function AppList() {
  return (
    <View mt={8}>
      <ListItem
        title="I am alist of unknown..."
        bg="magenta"
        p={8}
        color="#fff"
      />
      {/** <Image source={{ uri: require("../assets/IMG_0328.JPG") }} /> */}
      {/**  <XStack>
        <Avatar circular>
          <Avatar.Image src={require("../assets/IMG_0328.JPG")} />
        </Avatar>
      </XStack> */}
      <YStack gap={8}>
        <Input placeholder="Enter email" keyboardType="email-address" />
        <TextArea placeholder="Enter message" />
        <Button
          size={"large"}
          bg="skyblue"
          color={"white"}
          circular
          onPress={() => {
            alert("<______Pressed______>");
          }}
        >
          Submit info...
        </Button>
      </YStack>
    </View>
  );
}

//const styles = StyleSheet.create({})
