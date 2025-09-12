import React from "react";
import { Align } from "@/types/Styles";

type Columns = 4 | 3 | 2;

type Gap = "xxl" | "xl" | "l" | "m" | "s" | "xs" | "none";

export type Props = {
  /**
   * <pre>
   *    4
   *    3 (default)
   *    2
   * </pre>
   */
  columns?: Columns;
  /**
   * <pre>
   *     xxl — 64px
   *      xl — 48px
   *       l — 32px
   *       m — 24px (default)
   *       s — 16px
   *      xs — 8px
   *    none — 0
   * </pre>
   */
  gap?: Gap;
  align?: Align;
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;