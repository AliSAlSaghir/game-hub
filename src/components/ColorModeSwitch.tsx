import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
}
