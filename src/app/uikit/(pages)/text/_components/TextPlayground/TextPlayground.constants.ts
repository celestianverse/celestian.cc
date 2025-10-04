import type { TextProps } from "@/components/uikit/Text/Text.types";

export const NAME = "Text";

export const DEFAULT_PROPS: TextProps = {
  color: "inherit",
  size: "m",
  weight: "regular",
  lineHeight: "m",
  whiteSpace: "normal",
  uppercase: false,
  lowercase: false,
  ellipsis: false,
  className: "",
} as const;