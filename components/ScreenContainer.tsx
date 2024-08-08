import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack, Text, ScrollView } from "tamagui";
import { FooterButton } from "./FooterButton";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
type Props = { title: string; children: React.ReactNode };

export const ScreenContainer = ({ title, children }: Props) => {
  const [selected, setSelected] = React.useState(0);
  //const { top } = useSafeAreaInsets();

  const top = 32,
    bottom = 32;
  return (
    <>
      <StatusBar backgroundColor="#1e1e1e" style="light" />

      {/**<Stack h={top} bg="#6200ee" /> 
       *  <Stack
        bg="rgba(0,0,0,.6)"
        py="$4"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <Text color="white" fontSize="$6" fontWeight="bold">
          {title}
        </Text>
      </Stack>
      */}

      <ScrollView flex={1}>{children}</ScrollView>
      {/*Footer bottom */}
      <Stack
        bg="#6200ee"
        alignItems="center"
        flexDirection="row"
        paddingBottom={bottom}
        mt={9}
      >
        <FooterButton
          title="Home"
          icon={<MaterialCommunityIcons name="home" />}
          selected={selected === 0}
          onPress={() => setSelected(0)}
        />
        <FooterButton
          title="Settings"
          icon={<MaterialCommunityIcons name="radio-tower" />}
          selected={selected === 1}
          onPress={() => setSelected(1)}
        />

        <FooterButton
          title="Help"
          icon={<MaterialCommunityIcons name="help" />}
          selected={selected === 2}
          onPress={() => setSelected(2)}
        />

        <FooterButton
          title="Contact us"
          icon={<MaterialCommunityIcons name="phone" />}
          selected={selected === 3}
          onPress={() => setSelected(3)}
        />
      </Stack>
    </>
  );
};
