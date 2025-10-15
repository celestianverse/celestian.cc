import type { ComponentProps } from "react";
import { Flex } from "@/components/uikit/Flex/Flex";
import type { ColorWithTransparent } from "@/types/Color";
import type { BorderStyle, BorderWidth, Padding, Tone } from "@/types/Styles";
import { BOX_BORDER_RADIUS, BOX_VARIANT } from "@/components/uikit/Box/Box.constants";

export type BoxVariant = typeof BOX_VARIANT[number];

export type BoxBorderRadius = typeof BOX_BORDER_RADIUS[number];

type Props = {
  variant?: BoxVariant;
  color?: ColorWithTransparent;
  tone?: Tone;
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
  laptopPadding?: Padding;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  tabletPadding?: Padding;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  mobilePadding?: Padding;
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
  laptopPaddingY?: Padding;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  tabletPaddingY?: Padding;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  mobilePaddingY?: Padding;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  paddingX?: Padding;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  laptopPaddingX?: Padding;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  tabletPaddingX?: Padding;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  mobilePaddingX?: Padding;
  radius?: BoxBorderRadius;
  laptopRadius?: BoxBorderRadius;
  tabletRadius?: BoxBorderRadius;
  mobileRadius?: BoxBorderRadius;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  hoverable?: boolean;
};

export type BoxProps = Props & ComponentProps<typeof Flex>;
