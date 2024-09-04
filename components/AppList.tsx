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
      <Text color={"cyan"}>The pryer to return the money.....</Text>

      <YStack gap={8}>
        <Input placeholder="Enter email" keyboardType="email-address" />
        <TextArea
          placeholder="Enter message"
          p={4}
          onChangeText={(text) => {
            console.log(text);
          }}
        />
        <Button
          size={"large"}
          bg="skyblue"
          color={"white"}
          p={4}
          circular
          onPress={() => {
            alert("<====|Pressed|====>");
          }}
        >
          Submit info...
        </Button>
      </YStack>
    </View>
  );
}

//const styles = StyleSheet.create({})
