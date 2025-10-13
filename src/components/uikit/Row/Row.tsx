import React from "react";
import { Flex } from "@/components/uikit/Flex/Flex";
import type { RowProps } from "./Row.types";

export const Row = (props: RowProps) => {
  return (
    <Flex {...props} />
  );
};
