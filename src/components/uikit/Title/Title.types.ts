import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { LineHeight, FontWeight, WhiteSpace } from "@/types/Styles";
import { TITLE_SIZE } from "@/components/uikit/Title/Title.constants";

export type TitleElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TitleSize = typeof TITLE_SIZE[number];

export type TitleProps = {
  color?: Color | "inherit";
  size?: TitleSize;
  weight?: FontWeight;
  lineHeight?: LineHeight;
  uppercase?: boolean;
  lowercase?: boolean;
  ellipsis?: boolean;
  whiteSpace?: WhiteSpace;
  className?: string;
  children?: ReactNode;
};
