import type { Color } from "@/types/Color";
import type { BorderStyle, BorderWidth, Tone } from "@/types/Styles";

export type Element = "div" | "hr";

export type Props = {
  color?: Color;
  tone?: Tone;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  className?: string;
};