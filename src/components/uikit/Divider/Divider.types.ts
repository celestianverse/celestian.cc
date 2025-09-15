import type { Color } from "@/types/Color";

export type Element = "div" | "hr";

type Variant = "outline" | "outline-soft" | "dash" | "dash-soft";

export type Props = {
  variant?: Variant;
  color?: Color;
  className?: string;
};