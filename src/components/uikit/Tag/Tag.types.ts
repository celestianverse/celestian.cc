import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { IconProps } from "@/hooks/useIcon";
import type { BorderRadius, BorderStyle, BorderWidth, Tone } from "@/types/Styles";

export type Element = "p" | "address" | "time" | "span";

export type Variant = "flat" | "gradient" | "outline" | "ghost";

type Size = "m" | "s";

export type Props = {
  variant?: Variant;
  color?: Color;
  tone?: Tone;
  size?: Size;
  radius?: Extract<BorderRadius, 0 | 4 | 8 | 12 | 16 | 999>;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  className?: string;
  children?: ReactNode;
} & IconProps;
