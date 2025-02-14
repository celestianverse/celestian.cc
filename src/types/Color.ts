type Colors =
  "main" |
  "utility" |
  "neutral" |
  "accent" |
  "contrast" |
  "phantom" |
  "info" |
  "success" |
  "warning" |
  "danger";

export type Color<T extends Colors = Colors> = T;
