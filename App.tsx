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
import { ScreenContainer } from "./components/ScreenContainer";
import NavigationContainerComponent from "./components/NavigationContainer";

export default function App() {
  return (
    <>
      <NavigationContainerComponent />
      <StatusBar style="auto" />
    </>
  );
  return (
    <AppContainer>
      <ScreenContainer title="Tamagui by Vince."></ScreenContainer>
    </AppContainer>
  );
}
