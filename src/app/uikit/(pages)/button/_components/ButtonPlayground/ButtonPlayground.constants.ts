import type { ButtonAs, ButtonProps } from "@/components/uikit/Button/Button.types";

export const NAME = "Button";

export const DEFAULT_PROPS: ButtonProps & ButtonAs = {
  as: "button",
  variant: "flat",
  color: "primary",
  tone: "base",
  size: "m",
  justify: "center",
  radius: 12,
  borderStyle: "none",
  borderWidth: 0,
  iconStart: "none",
  iconEnd: "none",
  iconOnly: "none",
  fullwidth: false,
  square: false,
  active: false,
  loading: false,
  disabled: false,
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, color: "info"} as const;