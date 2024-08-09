import { View, Text } from "react-native";
import React from "react";

import { Accordion, YStack, Paragraph } from "tamagui";

export default function AppAccordion() {
  return (
    <YStack width="100%" mt={10}>
      <Accordion type="multiple">
        <Accordion.Item value="a">
          <Accordion.Trigger flexDirection="row" justifyContent="space-between">
            {({ open }: { open: boolean }) => (
              <>
                <Paragraph>Open accordion</Paragraph>
              </>
            )}
          </Accordion.Trigger>
          <Accordion.Content>
            <Text>Accordion text</Text>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </YStack>
  );
}
