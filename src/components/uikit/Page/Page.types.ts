import type { HTMLAttributes, ReactNode } from "react";
import type { AlignItems, Gap, JustifyContent } from "@/types/Styles";

export type PageProps = {
  gap?: Gap;
  laptopGap?: Gap;
  tabletGap?: Gap;
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