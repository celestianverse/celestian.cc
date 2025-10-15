import type { BadgeProps } from "@/components/uikit/Badge/Badge.types";

export const NAME = "Badge";

export const DEFAULT_PROPS: BadgeProps = {
  color: "primary",
  tone: "base",
  size: "m",
  radius: 999,
  dot: false,
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, color: "info"} as const;