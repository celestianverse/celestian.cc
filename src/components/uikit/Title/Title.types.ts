import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { LineHeight, FontWeight, WhiteSpace } from "@/types/Styles";

export type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Size = "xl" | "l" | "m" | "s" | "xs";

export type Props = {
  color?: Color | "inherit";
  size?: Size;
  weight?: FontWeight;
  lineHeight?: LineHeight;
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
  whiteSpace?: WhiteSpace;
  className?: string;
  children?: ReactNode;
};
