export const OVERFLOW = [
  "auto",
  "hidden",
  "visible",
  "scroll",
] as const;

export const FLEX_DIRECTION = [
  "row",
  "row-reverse",
  "column",
  "column-reverse",
] as const;

export const ALIGN_ITEMS = [
  "flex-start",
  "center",
  "flex-end",
  "stretch",
] as const;

export const JUSTIFY_CONTENT = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
] as const;

export const FLEX_WRAP = [
  "wrap",
  "nowrap",
] as const;

export const GAP = [0, 4, 8, 16, 24, 32, 48, 64, 96, 128] as const;

export const PADDING = [0, 4, 8, 16, 24, 32, 48, 64, 96, 128] as const;

export const FONT_WEIGHT = [
  "regular",
  "medium",
  "bold",
] as const;

export const LINE_HEIGHT = [
  "s",
  "m",
  "l",
] as const;

export const WHITE_SPACE = [
  "normal",
  "nowrap",
  "pre-line",
] as const;

export const BORDER_STYLE = [
  "solid",
  "dashed",
  "dotted",
  "none",
] as const;

export const BORDER_RADIUS = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 999] as const;

export const CONTROL_BORDER_RADIUS = [0, 4, 8, 12, 16, 24, 999] as const;

export const TONE = [
  "base",
  "soft",
] as const;
