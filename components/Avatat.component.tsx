import { View, Text } from "react-native";
import React from "react";
import { XStack, Avatar, Paragraph } from "tamagui";
export default function AvatarComponent() {
  return (
    <XStack
      mt={4}
      ai="center"
      flexDirection="row"
      borderWidth={1}
      gap={8}
      borderColor={"red"}
      w="100%"
    >
      <Avatar circular size={125}>
        <Avatar.Image src={require("../assets/IMG_848rrr6.jpg")} />
      </Avatar>
      <Paragraph fontWeight="600">Vincent</Paragraph>
    </XStack>
  );
}
