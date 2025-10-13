import type { FlexAs } from "@/components/uikit/Flex/Flex.types";
import type { ColumnProps } from "@/components/uikit/Column/Column.types";

export const NAME = "Column";

export const DEFAULT_PROPS: ColumnProps & FlexAs = {
  as: "div",
  overflow: "visible",
  align: "stretch",
  justify: "flex-start",
  wrap: "nowrap",
  grow: 0,
  gap: 32,
  fullwidth: false,
} as const;
