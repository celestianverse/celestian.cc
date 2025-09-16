import type React from "react";
import { Flex } from "@/components/uikit/Flex/Flex";
import type { Color } from "@/types/Color";
import type { Overflow, Padding } from "@/types/Styles";

type Variant = "fill" | "fill-soft" | "gradient" | "outline" | "outline-soft" | "dash" | "dash-soft";

type Radius = "xxl" | "xl" | "l" | "m" | "s" | "xs" | "none";

type BoxProps = {
  variant?: Variant;
  color?: Color | "transparent";
  /**
   * <pre>
   *    xxl - 96px
   *     xl - 64px
   *      l - 48px
   *      m - 32px (default)
   *      s - 24px
   *     xs - 16px
   *    xxs - 8px
   *   none - 0
   * </pre>
   */
  padding?: Padding;
  /**
   * <pre>
   *    xxl - 96px
   *     xl - 64px
   *      l - 48px
   *      m - 32px (default)
   *      s - 24px
   *     xs - 16px
   *    xxs - 8px
   *   none - 0
   * </pre>
   */
  paddingY?: Padding;
  /**
   * <pre>
   *    xxl - 96px
   *     xl - 64px
   *      l - 48px
   *      m - 32px (default)
   *      s - 24px
   *     xs - 16px
   *    xxs - 8px
   *   none - 0
   * </pre>
   */
  paddingX?: Padding;
  /**
   * <pre>
   *    xxl - 64px
   *     xl - 48px
   *      l - 32px
   *      m - 24px (default)
   *      s - 16px
   *     xs - 8px
   *   none - 0
   * </pre>
   */
  radius?: Radius;
  hoverable?: boolean;
  overflow?: Overflow;
  className?: string;
  children: React.ReactNode;
};

export type Props = BoxProps & React.ComponentProps<typeof Flex>;
