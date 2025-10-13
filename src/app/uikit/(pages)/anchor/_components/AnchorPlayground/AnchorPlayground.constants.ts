import type { AnchorAs, AnchorProps } from "@/components/uikit/Anchor/Anchor.types";

export const NAME = "Anchor";

export const DEFAULT_PROPS: AnchorProps & AnchorAs = {
  as: "a",
  variant: "base",
  color: "primary",
  size: "m",
  padding: 0,
  paddingY: 0,
  paddingX: 0,
  borderStyle: "none",
  borderWidth: 0,
  iconStart: "none",
  iconEnd: "none",
  iconOnly: "none",
  fullwidth: false,
  active: false,
  disabled: false,
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, color: "info"} as const;