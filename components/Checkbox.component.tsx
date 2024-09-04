import React from "react";

import { Checkbox, Label, XStack, YStack } from "tamagui";
import { Check as CheckIcon } from "@tamagui/lucide-icons";

import type { CheckboxProps } from "tamagui";
export default function CheckboxComponent({
  label,
  ...props
}: {
  label: string;
}) {
  return (
    <XStack width={300} alignItems="center" gap="$2">
      <Checkbox
        id="plenary"
        size={80}
        onCheckedChange={(val) => alert(val)}
        {...props}
      >
        <Checkbox.Indicator>
          <CheckIcon size={44} color="aquamarine" />
        </Checkbox.Indicator>
      </Checkbox>
      <Label>{label}</Label>
    </XStack>
  );
}
