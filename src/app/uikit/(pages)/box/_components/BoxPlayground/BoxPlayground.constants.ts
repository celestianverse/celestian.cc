import type { BoxProps } from "@/components/uikit/Box/Box.types";
import type { FlexAs } from "@/components/uikit/Flex/Flex.types";

export const NAME = "Box";

export const DEFAULT_PROPS: BoxProps & FlexAs = {
  as: "div",
  variant: "flat",
  color: "transparent",
  tone: "base",
  overflow: "visible",
  direction: "column",
  align: "stretch",
  justify: "flex-start",
  wrap: "nowrap",
  grow: 0,
  gap: 32,
  padding: 32,
  paddingY: 32,
  paddingX: 32,
  radius: 24,
  borderStyle: "none",
  borderWidth: 0,
  fullwidth: false,
  hoverable: false,
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, color: "info"} as const;