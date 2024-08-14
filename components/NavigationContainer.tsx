import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppAlert from "./AppAlert";
import AppContainer from "./AppContainer";
import Home from "../screens/Home";
import SignUpForm from "../screens/SignUp";

export type RootStackLists = { Home: undefined; SignUp: undefined };
const Stack = createNativeStackNavigator<RootStackLists>();
export default function NavigationContainerComponent() {
  return (
    <AppContainer>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUpForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContainer>
  );
}
