import type { ReactElement } from "react";
import type { FlexElement } from "@/components/uikit/Flex/Flex.types";

export type Props = {
  as?: Extract<FlexElement, "div" | "label">;
  label?: string | number;
  labelPosition?: "top" | "left" | "right";
  labelWidth?: number;
  className?: string;
  children: ReactElement<{ id?: string }>;
};