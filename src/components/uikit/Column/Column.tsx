import React from "react";
import { Flex } from "@/components/uikit/Flex/Flex";
import type { ColumnProps } from "./Column.types";

export const Column = (props: ColumnProps) => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      {...props}
    />
  );
};
