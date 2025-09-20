import React from "react";
import type { Color } from "@/types/Color";
import type { IconProps } from "@/hooks/useIcon";

export type Element = "p" | "address" | "time" | "span";

export type Variant = "fill" | "fill-soft" | "gradient" | "outline" | "outline-soft" | "dash" | "dash-soft" | "ghost";

type Size = "m" | "s";

type Radius = "max" | "l" | "m" | "s" | "none";

export type Props = {
  variant?: Variant;
  color?: Color;
  size?: Size;
  /**
   * <pre>
   *    max - 999px
   *      m - 12px
   *      s - 8px (default)
   *     xs - 4px
   *   none - 0
   * </pre>
   */
  radius?: Radius;
  className?: string;
  children?: React.ReactNode;
} & IconProps;
