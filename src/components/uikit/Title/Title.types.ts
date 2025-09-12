import type React from "react";
import type { Color } from "@/types/Color";
import { LineHeight, Weight } from "@/types/Styles";

export type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Size = "xxxl" | "xxl" | "xl" | "l" | "m" | "s" | "xs";

export type Props = {
  color?: Color | "inherit";
  size?: Size;
  weight?: Weight;
  lineHeight?: LineHeight;
  uppercase?: boolean;
  lowercase?: boolean;
  nowrap?: boolean;
  ellipsis?: boolean;
  className?: string;
  children?: React.ReactNode;
};
