import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { ControlBorderRadius } from "@/types/Styles";

export type SegmentsProps = {
  color?: Color;
  radius?: ControlBorderRadius;
  fullwidth?: boolean;
  className?: string;
  children: ReactNode;
};