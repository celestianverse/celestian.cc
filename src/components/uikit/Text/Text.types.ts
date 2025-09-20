import type React from "react";
import type { Color } from "@/types/Color";
import type { LineHeight, Weight, WhiteSpace } from "@/types/Styles";

export type Element = "div" | "p" | "span" | "small" | "address" | "time";

type Size = "m" | "s";

export type Props = {
  color?: Color | "inherit";
  size?: Size;
  weight?: Weight;
  lineHeight?: LineHeight;
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
  whiteSpace?: WhiteSpace;
  className?: string;
  children?: React.ReactNode;
};
