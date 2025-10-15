import type { SectionProps } from "@/components/uikit/Section/Section.types";

export const NAME = "Section";

export const DEFAULT_PROPS: SectionProps = {
  variant: "flat",
  color: "transparent",
  tone: "base",
  overflow: "visible",
  direction: "column",
  align: "stretch",
  justify: "flex-start",
  wrap: "nowrap",
  grow: 0,
  gap: 64,
  height: "auto",
  paddingY: 96,
  paddingTop: 96,
  paddingBottom: 96,
  radius: 0,
  radiusTop: 0,
  radiusBottom: 0,
  overlapBottom: 0,
  offsetHeader: false,
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, color: "info"} as const;