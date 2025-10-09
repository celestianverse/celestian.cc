import type { IconProps } from "@/components/uikit/Icon/Icon.types";

export const NAME = "Icon";

export const DEFAULT_PROPS: IconProps = {
  name: "none",
  color: "inherit",
  size: "m",
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, name: "user"} as const;