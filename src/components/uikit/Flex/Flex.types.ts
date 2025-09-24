import type { ReactNode } from "react";
import type { AlignItems, FlexDirection, Gap, JustifyContent, FlexWrap, Overflow } from "@/types/Styles";

export type Element = "div" | "section" | "article" | "header" | "footer" | "aside" | "nav" | "ul" | "ol" | "button" | "a";

export type Props = {
  overflow?: Overflow;
  direction?: FlexDirection;
  laptopDirection?: FlexDirection;
  tabletDirection?: FlexDirection;
  mobileDirection?: FlexDirection;
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
  wrap?: FlexWrap;
  fullwidth?: boolean;
  className?: string;
  children?: ReactNode;
};