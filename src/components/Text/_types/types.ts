import type React from "react";
import type { Color } from "@/types/Color";

export type Element = "div" | "p" | "span" | "small" | "address" | "time";

type Size = "m" | "s";

type Weight = "bold" | "regular";

export type Props = {
  color?: Color | "inherit";
  size?: Size;
  weight?: Weight;
  paragraph?: boolean;
  uppercase?: boolean;
  nowrap?: boolean;
  ellipsis?: boolean;
  className?: string;
  children?: React.ReactNode;
};
