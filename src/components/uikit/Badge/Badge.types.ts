import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { Tone } from "@/types/Styles";
import { TAG_BORDER_RADIUS, TAG_SIZE } from "@/components/uikit/Tag/Tag.constants";

export type BadgeSize = typeof TAG_SIZE[number];

export type BadgeRadius = typeof TAG_BORDER_RADIUS[number];

export type BadgeProps = {
  color?: Color;
  tone?: Tone;
  size?: BadgeSize;
  radius?: BadgeRadius;
  dot?: false;
  className?: string;
  children?: ReactNode;
};
