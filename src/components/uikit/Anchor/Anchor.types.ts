import React from "react";
import type { Color } from "@/types/Color";

export type Element = "button" | "a" | "div";

type Size = "m" | "s";

type Padding = "l" | "m" | "s";

export type Props = {
  color?: Color;
  size?: Size;
  padding?: Padding;
  underline?: boolean;
  dash?: boolean;
  active?: boolean;
  disabled?: boolean;
  fullwidth?: boolean;
  className?: string;
  children?: React.ReactNode;
};
