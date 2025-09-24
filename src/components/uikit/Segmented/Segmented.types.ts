import type { ReactNode } from "react";
import type { Color } from "@/types/Color";
import type { BorderRadius } from "@/types/Styles";

export type Props = {
  color?: Color;
  radius?: Extract<BorderRadius, 0 | 4 | 8 | 12 | 16 | 24 | 999>;
  fullwidth?: boolean;
  className?: string;
  children: ReactNode;
};