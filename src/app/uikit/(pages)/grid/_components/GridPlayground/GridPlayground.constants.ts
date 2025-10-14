import type { GridProps } from "@/components/uikit/Grid/Grid.types";

export const NAME = "Grid";

export const DEFAULT_PROPS: GridProps = {
  columns: 3,
  align: "flex-start",
  gap: 24,
  fullwidth: true,
} as const;
