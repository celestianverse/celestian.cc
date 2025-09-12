import type React from "react";
import type { Color } from "@/types/Color";
import { Align, Justify } from "@/types/Styles";

export type Element = "div" | "section" | "article" | "header" | "footer" | "button" | "a";

type Variant = "fill" | "gradient";

type Gap = "xxl" | "xl" | "l" | "m" | "s" | "xs" | "none";

type Padding = "l" | "m" | "s" | "xs" | "none";

type Radius = "l" | "m" | "s" | "none";

export type Props = {
  variant?: Variant;
  color?: Color | "transparent";
  /**
   * <pre>
   *      l - 128px
   *      m - 96px (default)
   *      s - 64px
   *     xs - 48px
   *   none - 0
   * </pre>
   */
  paddingY?: Padding;
  /**
   * <pre>
   *      xl - 64px
   *       l - 48px
   *       m - 32px (default)
   *       s - 24px
   *      xs - 16px
   *    none - 0
   * </pre>
   */
  gap?: Gap;
  align?: Align;
  justify?: Justify;
  /**
   * <pre>
   *      l - 128px
   *      m - 96px
   *      s - 64px
   *   none - 0 (default)
   * </pre>
   */
  radius?: Radius;
  /**
   * <pre>
   *      l - 128px
   *      m - 96px
   *      s - 64px
   *   none - 0 (default)
   * </pre>
   */
  radiusTop?: Radius;
  /**
   * <pre>
   *      l - 128px
   *      m - 96px
   *      s - 64px
   *   none - 0 (default)
   * </pre>
   */
  radiusBottom?: Radius;
  className?: string;
  children: React.ReactNode;
};
