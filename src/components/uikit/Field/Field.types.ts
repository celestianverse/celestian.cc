import type { ReactElement } from "react";
import type { Element } from "@/components/uikit/Flex/Flex.types";

export type Props = {
  as?: Extract<Element, "div" | "label">;
  label?: string | number;
  labelPosition?: "top" | "left" | "right";
  labelWidth?: number;
  className?: string;
  children: ReactElement<{ id?: string }>;
};