import type { Color } from "@/types/Color";
import React from "react";

type Radius = "max" | "xl" | "l" | "m" | "s" | "xs" | "none";

export type Props = {
  color?: Color;
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
  className?: string;
  children: React.ReactNode;
};