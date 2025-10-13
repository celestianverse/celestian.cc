export const COLORS = [
  "primary",
  "secondary",
  "brand",
  "accent",
  "utility",
  "contrast",
  "phantom",
  "info",
  "success",
  "warning",
  "danger",
  "rating",
] as const;

export const COLORS_WITH_INHERIT = ["inherit", ...COLORS] as const;

export const COLORS_WITH_TRANSPARENT = ["transparent", ...COLORS] as const;