import type { ComponentProps } from "react";
import type { ColorWithTransparent } from "@/types/Color";
import { Flex } from "@/components/uikit/Flex/Flex";
import type { AlignItems, Tone } from "@/types/Styles";
import {
  SECTION_BORDER_RADIUS,
  SECTION_HEIGHT,
  SECTION_PADDING,
  SECTION_VARIANT
} from "@/components/uikit/Section/Section.constants";

export type SectionVariant = typeof SECTION_VARIANT[number];

export type SectionHeight = typeof SECTION_HEIGHT[number];

export type SectionPadding = typeof SECTION_PADDING[number];

export type SectionBorderRadius = typeof SECTION_BORDER_RADIUS[number];

type Props = {
  variant?: SectionVariant;
  color?: ColorWithTransparent;
  tone?: Tone;
  alignSection?: AlignItems;
  paddingY?: SectionPadding;
  paddingTop?: SectionPadding;
  paddingBottom?: SectionPadding;
  overlapBottom?: SectionBorderRadius;
  /**
   * <pre>
   *    fullscreen - 100vh
   *             l - 720px
   *             m - 400px
   *          auto - auto (default)
   * </pre>
   */
  height?: SectionHeight;
  radius?: SectionBorderRadius;
  laptopRadius?: SectionBorderRadius;
  tabletRadius?: SectionBorderRadius;
  mobileRadius?: SectionBorderRadius;
  radiusTop?: SectionBorderRadius;
  laptopRadiusTop?: SectionBorderRadius;
  tabletRadiusTop?: SectionBorderRadius;
  mobileRadiusTop?: SectionBorderRadius;
  radiusBottom?: SectionBorderRadius;
  laptopRadiusBottom?: SectionBorderRadius;
  tabletRadiusBottom?: SectionBorderRadius;
  mobileRadiusBottom?: SectionBorderRadius;
  offsetHeader?: boolean;
  classNameContainer?: string;
};

export type SectionProps = Props & ComponentProps<typeof Flex>;
