import React from "react";
import { Flex } from "@/components/uikit/Flex/Flex";
import { Props } from "./Column.types";

export const Column = (props: Props) => {
  return (
    <Flex
      {...props}
      direction="column"
    />
  );
};
