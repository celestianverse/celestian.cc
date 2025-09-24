import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { IconProps } from "@/hooks/useIcon";
import type { BorderRadius, BorderStyle, BorderWidth, JustifyContent, Tone } from "@/types/Styles";

export type Element = "button" | "a" | "div";

export type Variant = "flat" | "gradient" | "outline" | "ghost";

export type Size = "l" | "m" | "s";

export type ButtonProps = {
  variant?: Variant;
  color?: Color;
  tone?: Tone;
  /**
   * <pre>
   *   l - 64px
   *   m - 48px (default)
   *   s - 32px
   * </pre>
   */
  size?: Size;
  justify?: JustifyContent;
  radius?: Extract<BorderRadius, 0 | 4 | 8 | 12 | 16 | 24 | 999>;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  fullwidth?: boolean;
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
} & IconProps;
