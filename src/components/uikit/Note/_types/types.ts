import type React from "react";
import type { Color } from "@/types/Color";

export type Element = "div" | "p" | "span" | "small";

type Weight = "bold" | "regular";

export type Props = {
  color?: Color;
  weight?: Weight;
  isUppercase?: boolean;
  isNowrap?: boolean;
  isEllipsis?: boolean;
  className?: string;
  children?: React.ReactNode;
};
