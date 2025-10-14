import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { ControlBorderRadius, FlexDirection } from "@/types/Styles";

export type SegmentsDirection = {
  direction?: FlexDirection;
}

export type SegmentsProps = {
  color?: Color;
  laptopDirection?: FlexDirection;
  tabletDirection?: FlexDirection;
  mobileDirection?: FlexDirection;
  radius?: ControlBorderRadius;
  fullwidth?: boolean;
  className?: string;
  children: ReactNode;
} & SegmentsDirection;