import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { IconProps } from "@/hooks/useIcon";
import type { BorderStyle, BorderWidth, Tone } from "@/types/Styles";
import { TAG_BORDER_RADIUS, TAG_ELEMENT, TAG_SIZE, TAG_VARIANT } from "@/components/uikit/Tag/Tag.constants";

export type TagElement = typeof TAG_ELEMENT[number];

export type TagVariant = typeof TAG_VARIANT[number];

export type TagSize = typeof TAG_SIZE[number];

export type TagRadius = typeof TAG_BORDER_RADIUS[number];

export type TagAs = {
  as?: TagElement;
};

export type TagProps = {
  variant?: TagVariant;
  color?: Color;
  tone?: Tone;
  size?: TagSize;
  radius?: TagRadius;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  className?: string;
  children?: ReactNode;
} & IconProps;
