import type { PageProps } from "@/components/uikit/Page/Page.types";

export const NAME = "Page";

export const DEFAULT_PROPS: PageProps = {
  align: "stretch",
  justify: "flex-start",
  gap: 0,
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, gap: 32} as const;
