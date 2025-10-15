import type { LoaderProps } from "@/components/uikit/Loader/Loader.types";

export const NAME = "Loader";

export const DEFAULT_PROPS: LoaderProps = {
  color: "primary",
  size: "m",
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, color: "info"} as const;