export const COLOR = [
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

export const COLOR_WITH_INHERIT = ["inherit", ...COLOR] as const;

export const COLOR_WITH_TRANSPARENT = ["transparent", ...COLOR] as const;