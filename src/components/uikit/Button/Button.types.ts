import React from "react";
import type { Color } from "@/types/Color";
import type { IconProps } from "@/hooks/useIcon";

export type Element = "button" | "a" | "div";

export type Variant = "fill" | "fill-soft" | "gradient" | "outline" | "outline-soft" | "dash" | "dash-soft" | "ghost";

export type Size = "l" | "m" | "s";

type Radius = "max" | "xl" | "l" | "m" | "s" | "xs" | "none";

export type Props = {
  variant?: Variant;
  color?: Color;
  /**
   * <pre>
   *   l - 64px
   *   m - 48px (default)
   *   s - 32px
   * </pre>
   */
  size?: Size;
  /**
   * <pre>
   *    max - 999px
   *     xl - 24px
   *      l - 16px (default for size-l)
   *      m - 12px (default for size-m)
   *      s - 8px (default for size-s)
   *     xs - 4px
   *   none - 0
   * </pre>
   */
  radius?: Radius;
  fullwidth?: boolean;
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
} & IconProps;
