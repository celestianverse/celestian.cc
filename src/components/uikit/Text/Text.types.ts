import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { LineHeight, FontWeight, WhiteSpace } from "@/types/Styles";
import { TEXT_SIZE } from "@/components/uikit/Text/Text.constants";

export type TextElement =
  | "div"
  | "p"
  | "span"
  | "small"
  | "address"
  | "time"
  | "label"
;

export type TextSize = typeof TEXT_SIZE[number];

export type TextProps = {
  color?: Color | "inherit";
  size?: TextSize;
  weight?: FontWeight;
  lineHeight?: LineHeight;
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
  whiteSpace?: WhiteSpace;
  className?: string;
  children?: ReactNode;
};
