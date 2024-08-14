import React from "react";

import type { SizeTokens } from "tamagui";

import {
  Button,
  Form,
  H4,
  Spinner,
  XStack,
  YStack,
  Input as TextInput,
  Label,
  View,
} from "tamagui";
import CheckboxComponent from "../components/Checkbox.component";
export default function SignUpForm(props: { size: SizeTokens }) {
  const [status, setStatus] = React.useState<
    "off" | "submitting" | "submitted"
  >("off");
  React.useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => setStatus("off"), 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);
  return (
    <Form
      alignItems="center"
      minWidth={300}
      gap="$2"
      onSubmit={() => setStatus("submitting")}
      borderWidth={1}
      borderRadius="$4"
      backgroundColor="$background"
      //borderColor="red"
      padding="$4"
      flex={1}
    >
      <H4>{status[0].toUpperCase() + status.slice(1)}</H4>
      <YStack borderWidth={2} borderColor="magenta" w="100%" p={2}>
        <Label>First name</Label>
        <TextInput placeholder="Enter first name..." w="100%" />
      </YStack>
      <View>
        <CheckboxComponent label="Stay logged in...." />
      </View>

      <Form.Trigger asChild disabled={status !== "off"}>
        <Button
          icon={status === "submitting" ? () => <Spinner /> : undefined}
          w="100%"
        >
          Submit
        </Button>
      </Form.Trigger>
    </Form>
  );
}
