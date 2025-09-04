import React from "react";
import type { Color } from "@/types/Color";

export type Element = "button" | "a" | "div";

type Variant = "fill" | "outline" | "ghost";

type Size = "l" | "m" | "s";

export type Props = {
  variant?: Variant;
  color?: Color;
  size?: Size;
  block?: boolean;
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};
