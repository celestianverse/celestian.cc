import type { FlexAs } from "@/components/uikit/Flex/Flex.types";
import type { RowProps } from "@/components/uikit/Row/Row.types";

export const NAME = "Row";

export const DEFAULT_PROPS: RowProps & FlexAs = {
  as: "div",
  overflow: "visible",
  align: "stretch",
  justify: "flex-start",
  wrap: "nowrap",
  grow: 0,
  gap: 32,
  fullwidth: false,
} as const;
