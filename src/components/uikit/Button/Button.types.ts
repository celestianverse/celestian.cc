import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { IconProps } from "@/hooks/useIcon";
import type { BorderStyle, BorderWidth, ControlBorderRadius, ControlSize, JustifyContent, Tone } from "@/types/Styles";
import { BUTTON_ELEMENT, BUTTON_VARIANT } from "./Button.constants";

export type ButtonElement = typeof BUTTON_ELEMENT[number];

export type ButtonVariant = typeof BUTTON_VARIANT[number];

export type ButtonAs = {
  as?: ButtonElement;
};

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
  size?: ControlSize;
  justify?: JustifyContent;
  radius?: ControlBorderRadius;
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