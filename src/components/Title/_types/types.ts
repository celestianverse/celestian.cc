import type React from "react";
import type { Color } from "@/types/Colors";

export type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Size = "xl" | "l" | "m" | "s" | "xs";

type Weight = "bold" | "regular";

export type Props = {
  color?: Color;
  size?: Size;
  weight?: Weight;
  isNowrap?: boolean;
  isEllipsis?: boolean;
  className?: string;
  children?: React.ReactNode;
};
