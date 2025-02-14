import type React from "react";
import type { Color } from "@/types/Color";

export type Element = "div" | "p" | "span" | "address" | "time";

type Size = "l" | "m" | "s";

type Weight = "bold" | "regular";

export type Props = {
  color?: Color;
  size?: Size;
  weight?: Weight;
  isUppercase?: boolean;
  isNowrap?: boolean;
  isEllipsis?: boolean;
  className?: string;
  children?: React.ReactNode;
};
