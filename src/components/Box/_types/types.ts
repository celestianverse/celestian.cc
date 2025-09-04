import type React from "react";
import type { Color } from "@/types/Color";

export type Element = "div" | "section" | "article" | "header" | "footer";

type Padding = "xl" | "l" | "m" | "s" | "none";

type Radius = "l" | "m" | "s" | "xs" | "none";

export type Props = {
  color?: Color | "transparent";
  /**
   * <pre>
   *   xl: 64px, l: 48px, m: 32px, s: 24px, none: 0
   * </pre>
   */
  padding?: Padding;
  /**
   * <pre>
   *   l: 24px, m: 16px, s: 8px, xs: 4px, none: 0
   * </pre>
   */
  radius?: Radius;
  className?: string;
  children: React.ReactNode;
};
