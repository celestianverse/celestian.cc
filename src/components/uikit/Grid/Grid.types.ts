import React from "react";
import type { Align, Gap } from "@/types/Styles";

type Columns = 4 | 3 | 2;

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
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;