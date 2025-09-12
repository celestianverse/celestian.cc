import type React from "react";
import type { Color } from "@/types/Color";
import { LineHeight, Weight } from "@/types/Styles";

export type Element = "div" | "p" | "span" | "small" | "address" | "time";

type Size = "m" | "s";

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
