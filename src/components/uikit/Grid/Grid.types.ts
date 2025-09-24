import type { HTMLAttributes, ReactNode } from "react";
import type { AlignItems, Gap } from "@/types/Styles";

type Columns = 2 | 3 | 4;

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
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  gap?: Gap;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  laptopGap?: Gap;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  tabletGap?: Gap;
  /**
   * <pre>
   *   0 | 4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128
   * </pre>
   */
  mobileGap?: Gap;
  align?: AlignItems;
  laptopAlign?: AlignItems;
  tabletAlign?: AlignItems;
  mobileAlign?: AlignItems;
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;