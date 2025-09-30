import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { BorderStyle, BorderWidth } from "@/types/Styles";
import type { IconProps } from "@/hooks/useIcon";
import { ANCHOR_PADDING, ANCHOR_SIZE, ANCHOR_VARIANT } from "@/components/uikit/Anchor/Anchor.constants";

export type AnchorElement = "button" | "a" | "div";

export type AnchorVariant = typeof ANCHOR_VARIANT[number];

export type AnchorSize = typeof ANCHOR_SIZE[number];

export type AnchorPadding = typeof ANCHOR_PADDING[number];

export type AnchorProps = {
  variant?: AnchorVariant;
  color?: Color;
  size?: AnchorSize;
  padding?: AnchorPadding;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  fullwidth?: boolean;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
} & IconProps;
