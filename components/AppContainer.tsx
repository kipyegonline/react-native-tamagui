import { View, Text } from "react-native";
import React from "react";
import { createTamagui, PortalProvider, TamaguiProvider } from "tamagui";
import { config } from "@tamagui/config/v3";
import { useFonts } from "expo-font";
const tamaguiConfig = createTamagui(config);

// TypeScript types across all Tamagui APIs
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

type Props = { children: React.ReactNode };
export default function AppContainer({ children }: Props) {
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
      <PortalProvider shouldAddRootHost>{children}</PortalProvider>
    </TamaguiProvider>
  );
}
