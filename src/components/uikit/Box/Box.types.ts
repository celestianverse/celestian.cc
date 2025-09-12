import type React from "react";
import type { Color } from "@/types/Color";

export type Element = "div" | "section" | "article" | "button" | "a";

type Variant = "fill" | "soft" | "gradient" | "outline" | "dash";

type Padding = "xl" | "l" | "m" | "s" | "xs" | "none";

type Radius = "xxl" | "xl" | "l" | "m" | "s" | "xs" | "none";

export type Props = {
  variant?: Variant;
  color?: Color | "transparent";
  /**
   * <pre>
   *     xl - 64px
   *      l - 48px
   *      m - 32px (default)
   *      s - 24px
   *     xs - 16px
   *   none - 0
   * </pre>
   */
  padding?: Padding;
  /**
   * <pre>
   *     xl - 64px
   *      l - 48px
   *      m - 32px (default)
   *      s - 24px
   *     xs - 16px
   *   none - 0
   * </pre>
   */
  paddingY?: Padding;
  /**
   * <pre>
   *     xl - 64px
   *      l - 48px
   *      m - 32px (default)
   *      s - 24px
   *     xs - 16px
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
  className?: string;
  children: React.ReactNode;
};
