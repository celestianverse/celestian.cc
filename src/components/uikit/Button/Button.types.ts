import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { IconProps } from "@/hooks/useIcon";
import type { BorderStyle, BorderWidth, JustifyContent, Tone } from "@/types/Styles";
import { BORDER_RADIUS, SIZE, VARIANT } from "./Button.constants";

export type ButtonElement = "button" | "a" | "div";

export type ButtonVariant = typeof VARIANT[number];

export type ButtonSize = typeof SIZE[number];

export type ButtonBorderRadius = typeof BORDER_RADIUS[number];

export type ButtonProps = {
  variant?: ButtonVariant;
  color?: Color;
  tone?: Tone;
  /**
   * <pre>
   *   l - 64px
   *   m - 48px (default)
   *   s - 32px
   * </pre>
   */
  size?: ButtonSize;
  justify?: JustifyContent;
  radius?: ButtonBorderRadius;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  fullwidth?: boolean;
  square?: boolean;
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
} & IconProps;
