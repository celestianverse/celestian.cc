import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { BorderStyle, BorderWidth, Padding } from "@/types/Styles";
import type { IconProps } from "@/hooks/useIcon";
import { ANCHOR_ELEMENT, ANCHOR_SIZE, ANCHOR_VARIANT } from "@/components/uikit/Anchor/Anchor.constants";

export type AnchorElement = typeof ANCHOR_ELEMENT[number];

export type AnchorVariant = typeof ANCHOR_VARIANT[number];

export type AnchorSize = typeof ANCHOR_SIZE[number];

export type AnchorAs = {
  as?: AnchorElement;
};

export type AnchorProps = {
  variant?: AnchorVariant;
  color?: Color;
  size?: AnchorSize;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  padding?: Padding;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  paddingY?: Padding;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  paddingX?: Padding;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  fullwidth?: boolean;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
} & IconProps;