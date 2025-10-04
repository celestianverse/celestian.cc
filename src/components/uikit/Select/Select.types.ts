import type { ReactNode } from "react";
import { SELECT_COLOR, SELECT_SIZE, SELECT_VARIANT } from "@/components/uikit/Select/Select.constants";
import type { BorderStyle, BorderWidth, ControlBorderRadius } from "@/types/Styles";

export type SelectVariant = typeof SELECT_VARIANT[number];

export type SelectColor = typeof SELECT_COLOR[number];

export type SelectSize = typeof SELECT_SIZE[number];

export type SelectProps = {
  value?: string | null;
  placeholder?: string;
  variant?: SelectVariant;
  color?: SelectColor;
  size?: SelectSize;
  width?: number | "auto" | "100%";
  radius?: ControlBorderRadius;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  fullwidth?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  children?: ReactNode;
};