import type React from "react";
import { Flex } from "@/components/uikit/Flex/Flex";
import type { Color } from "@/types/Color";
import type { BorderRadius, BorderStyle, BorderWidth, Padding, Tone } from "@/types/Styles";

type Variant = "flat" | "gradient" | "outline";

type BoxProps = {
  variant?: Variant;
  color?: Color | "transparent";
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
  radius?: Extract<BorderRadius, 0 | 8 | 16 | 24 | 32 | 48 | 64 | 999>;
  laptopRadius?: Extract<BorderRadius, 0 | 8 | 16 | 24 | 32 | 48 | 64 | 999>;
  tabletRadius?: Extract<BorderRadius, 0 | 8 | 16 | 24 | 32 | 48 | 64 | 999>;
  mobileRadius?: Extract<BorderRadius, 0 | 8 | 16 | 24 | 32 | 48 | 64 | 999>;
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  hoverable?: boolean;
};

export type Props = BoxProps & React.ComponentProps<typeof Flex>;
