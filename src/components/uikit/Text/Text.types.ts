import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { LineHeight, FontWeight, WhiteSpace } from "@/types/Styles";

export type Element =
  | "div"
  | "p"
  | "span"
  | "small"
  | "address"
  | "time"
  | "label"
;

type Size = "m" | "s";

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
