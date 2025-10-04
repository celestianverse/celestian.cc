import type { SwitchProps } from "@/components/uikit/Switch/Switch.types";

export const NAME = "Switch";

export const DEFAULT_PROPS: SwitchProps = {
  color: "success",
  size: "m",
  checked: false,
  disabled: false,
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, checked: true} as const;