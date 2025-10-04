import type { SelectProps } from "@/components/uikit/Select/Select.types";

export const NAME = "Select";

export const DEFAULT_PROPS: SelectProps & {width: string} = {
  variant: "flat",
  color: "primary",
  size: "m",
  width: "auto",
  radius: 12,
  borderStyle: "none",
  borderWidth: 0,
  fullwidth: false,
  disabled: false,
} as const;
