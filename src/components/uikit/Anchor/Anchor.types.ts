import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { BorderStyle, BorderWidth } from "@/types/Styles";

export type Element = "button" | "a" | "div";

export type Variant = "base" | "outline";

type Size = "m" | "s";

type Padding = "l" | "m" | "s";

export type Props = {
  variant?: Variant;
  color?: Color;
  size?: Size;
  padding?: Padding;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  fullwidth?: boolean;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
};
