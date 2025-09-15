import type React from "react";
import type { Color } from "@/types/Color";
import { Flex } from "@/components/uikit/Flex/Flex";
import { Align } from "@/types/Styles";

export type Element = "div" | "section" | "article" | "header" | "footer" | "button" | "a";

type Variant = "fill" | "gradient";

type Padding = "l" | "m" | "s" | "xs" | "none";

type Height = "fullscreen" | "xl" | "auto";

type Radius = "l" | "m" | "s" | "none";

type SectionProps = {
  variant?: Variant;
  color?: Color | "transparent";
  alignSection?: Align;
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
   *      l - 128px
   *      m - 96px
   *      s - 64px
   *   none - 0 (default)
   * </pre>
   */
  overlapBottom?: Radius;
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
  height?: Height;
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
  offsetHeader?: boolean;
  className?: string;
  children: React.ReactNode;
};

export type Props = SectionProps & React.ComponentProps<typeof Flex>;
