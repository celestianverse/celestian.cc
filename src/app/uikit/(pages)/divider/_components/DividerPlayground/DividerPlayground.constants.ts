import type { DividerProps } from "@/components/uikit/Divider/Divider.types";

export const NAME = "Divider";

export const DEFAULT_PROPS: DividerProps = {
  color: "primary",
  tone: "soft",
  borderStyle: "solid",
  borderWidth: 1,
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, color: "info", tone: "base"} as const;