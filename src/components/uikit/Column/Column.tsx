import React from "react";
import { Flex } from "@/components/uikit/Flex/Flex";
import type { Props } from "./Column.types";

export const Column = (props: Props) => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      {...props}
    />
  );
};
