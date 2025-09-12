import React from "react";
import { Align, Justify } from "@/types/Styles";

export type Element = "div" | "aside" | "nav" | "ul" | "ol";

type Gap = "xxl" | "xl" | "l" | "m" | "s" | "xs" | "none";

export type Props = {
  /**
   * <pre>
   *     xxl - 64px
   *      xl - 48px
   *       l - 32px
   *       m - 24px (default)
   *       s - 16px
   *      xs - 8px
   *    none - 0
   * </pre>
   */
  gap?: Gap;
  align?: Align;
  justify?: Justify;
  full?: boolean;
  className?: string;
  children: React.ReactNode;
};