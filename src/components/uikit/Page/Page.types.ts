import type { HTMLAttributes, ReactNode } from "react";
import type { AlignItems, JustifyContent } from "@/types/Styles";

type Gap = "xl" | "l" | "m" | "s" | "xs" | "none";

export type Props = {
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
  justify?: JustifyContent;
  laptopJustify?: JustifyContent;
  tabletJustify?: JustifyContent;
  mobileJustify?: JustifyContent;
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;