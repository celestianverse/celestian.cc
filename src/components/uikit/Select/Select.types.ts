import type { ReactNode } from "react";
import { SELECT_VARIANT } from "@/components/uikit/Select/Select.constants";
import type { BorderStyle, BorderWidth, ControlBorderRadius, ControlSize, Tone } from "@/types/Styles";
import type { Color } from "@/types/Color";

export type SelectVariant = typeof SELECT_VARIANT[number];

export type SelectProps = {
  value?: string | null;
  placeholder?: string;
  variant?: SelectVariant;
  color?: Color;
  tone?: Tone;
  size?: ControlSize;
  width?: number | "auto" | "100%";
  radius?: ControlBorderRadius;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  children?: ReactNode;
};