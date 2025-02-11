import React from "react";
import type { Color } from "@/types/Colors";

export type Element = "button" | "a" | "div";
type Variant = "fill" | "outline" | "ghost";
type Size = "l" | "m" | "s" | "xs";

export type Props = {
  variant?: Variant;
  color?: Color;
  size?: Size;
  isFullWidth?: boolean;
  isActive?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};
