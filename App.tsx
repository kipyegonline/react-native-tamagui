import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import {
  Button,
  TamaguiProvider,
  XStack,
  YStack,
  createTamagui,
  Paragraph,
  Text,
} from "tamagui";
import { config } from "@tamagui/config/v3";
import { useFonts } from "expo-font";
const tamaguiConfig = createTamagui(config);

// TypeScript types across all Tamagui APIs
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  React.useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          Open up App.tsx to start working on your app!
        </Text>
        <TouchableOpacity>
          <Text>Touch me...</Text>
        </TouchableOpacity>
        <View>
          <Button
            color="red"
            onPress={() => Alert.alert("", "Resign...")}
            mt={20}
          >
            Tamagui Button
          </Button>
          <Paragraph mt={78}>I am a paragrqaph...</Paragraph>
        </View>
        <XStack>
          <YStack>
            <Text>A</Text>
          </YStack>
          <YStack>
            <Text>A</Text>
          </YStack>
          <YStack>
            <Text>A</Text>
          </YStack>
        </XStack>

        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
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
