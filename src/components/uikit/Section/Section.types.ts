import type { ComponentProps } from "react";
import type { Color } from "@/types/Color";
import { Flex } from "@/components/uikit/Flex/Flex";
import type { AlignItems, BorderRadius, Padding, Tone } from "@/types/Styles";

export type Element = "div" | "section" | "article" | "header" | "footer" | "button" | "a";

type Variant = "flat" | "gradient";

type Height = "fullscreen" | "l" | "m" | "auto";

type SectionProps = {
  variant?: Variant;
  color?: Color | "transparent";
  tone?: Tone;
  alignSection?: AlignItems;
  paddingY?: Extract<Padding, 0 | 32 | 48 | 64 | 96 | 128>;
  paddingTop?: Extract<Padding, 0 | 32 | 48 | 64 | 96 | 128>;
  paddingBottom?: Extract<Padding, 0 | 32 | 48 | 64 | 96 | 128>;
  overlapBottom?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  /**
   * <pre>
   *    fullscreen - 100vh
   *             l - 720px
   *             m - 400px
   *          auto - auto (default)
   * </pre>
   */
  height?: Height;
  radius?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  laptopRadius?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  tabletRadius?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  mobileRadius?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  radiusTop?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  laptopRadiusTop?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  tabletRadiusTop?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  mobileRadiusTop?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  radiusBottom?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  laptopRadiusBottom?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  tabletRadiusBottom?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  mobileRadiusBottom?: Extract<BorderRadius, 0 | 64 | 96 | 128>;
  offsetHeader?: boolean;
  classNameContainer?: string;
};

export type Props = SectionProps & ComponentProps<typeof Flex>;
