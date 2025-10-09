import type { ReactNode } from "react";
import type { ColorWithInherit } from "@/types/Color";
import type { LineHeight, FontWeight, WhiteSpace } from "@/types/Styles";
import { TITLE_ELEMENT, TITLE_SIZE } from "@/components/uikit/Title/Title.constants";

export type TitleElement = typeof TITLE_ELEMENT[number];

export type TitleSize = typeof TITLE_SIZE[number];

export type TitleAs = {
  as?: TitleElement;
};

export type TitleProps = {
  color?: ColorWithInherit;
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
