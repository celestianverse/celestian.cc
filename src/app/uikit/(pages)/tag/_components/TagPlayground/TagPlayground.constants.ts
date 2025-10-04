import type { TagAs, TagProps } from "@/components/uikit/Tag/Tag.types";

export const NAME = "Tag";

export const DEFAULT_PROPS: TagProps & TagAs = {
  as: "span",
  variant: "flat",
  color: "primary",
  tone: "base",
  size: "m",
  radius: 8,
  borderStyle: "none",
  borderWidth: 0,
  iconStart: "none",
  iconEnd: "none",
  iconOnly: "none",
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, color: "info"} as const;