import type { ButtonAs, ButtonProps } from "@/components/uikit/Button/Button.types";
import type { SegmentsDirection } from "@/components/uikit/Segments/Segments.types";

export const NAME = "Segments";

export const DEFAULT_PROPS: ButtonProps & ButtonAs & SegmentsDirection = {
  direction: "row",
  color: "primary",
  tone: "base",
  size: "m",
  radius: 12,
  fullwidth: false,
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, color: "info"} as const;