import React from "react";
import type { Color } from "@/types/Color";

export type Element = "p" | "address" | "time" | "span";

export type Variant = "fill" | "fill-soft" | "gradient" | "outline" | "outline-soft" | "dash" | "dash-soft" | "ghost";

type Radius = "max" | "m" | "s" | "xs" | "none";

export type Props = {
  variant?: Variant;
  color?: Color;
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
};
