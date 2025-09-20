import React from "react";
import type { Align, Direction, Gap, Justify, Wrap } from "@/types/Styles";

export type Element = "div" | "section" | "article" | "header" | "footer" | "aside" | "nav" | "ul" | "ol" | "button" | "a";

export type Props = {
  direction?: Direction;
  /**
   * <pre>
   *     xxl - 96px
   *      xl - 64px
   *       l - 48px
   *       m - 32px (default)
   *       s - 24px
   *      xs - 16px
   *     xxs - 8px
   *    none - 0
   * </pre>
   */
  gap?: Gap;
  align?: Align;
  justify?: Justify;
  wrap?: Wrap;
  fullwidth?: boolean;
  className?: string;
  children?: React.ReactNode;
};