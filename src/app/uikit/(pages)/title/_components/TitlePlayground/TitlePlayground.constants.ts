import type { TitleProps } from "@/components/uikit/Title/Title.types";

export const NAME = "Title";

export const DEFAULT_PROPS: TitleProps = {
  color: "inherit",
  size: "m",
  weight: "bold",
  lineHeight: "m",
  whiteSpace: "normal",
  uppercase: false,
  lowercase: false,
  ellipsis: false,
  className: "",
} as const;