import type React from "react";
import type { Color } from "@/types/Color";

export type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Size = "xxl" | "xl" | "l" | "m" | "s" | "xs";

type Weight = "bold" | "regular";

export type Props = {
  color?: Color | "inherit";
  size?: Size;
  weight?: Weight;
  uppercase?: boolean;
  nowrap?: boolean;
  ellipsis?: boolean;
  className?: string;
  children?: React.ReactNode;
};
