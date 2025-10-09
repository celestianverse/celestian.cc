import type { Color } from "@/types/Color";
import type { BorderStyle, BorderWidth, Tone } from "@/types/Styles";
import type { DIVIDER_ELEMENT } from "@/components/uikit/Divider/Divider.constants";

export type DividerElement = typeof DIVIDER_ELEMENT[number];

export type DividerProps = {
  color?: Color;
  tone?: Tone;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  className?: string;
};