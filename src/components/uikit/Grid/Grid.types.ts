import type { HTMLAttributes, ReactNode } from "react";
import type { AlignItems, Gap } from "@/types/Styles";
import { GRID_COLUMNS } from "@/components/uikit/Grid/Grid.constants";

type GridColumns = typeof GRID_COLUMNS[number];

export type GridProps = {
  /**
   * <pre>
   *    4
   *    3 (default)
   *    2
   * </pre>
   */
  columns?: GridColumns;
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
  fullwidth?: boolean;
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;