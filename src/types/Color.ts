import { COLOR } from "@/constants/color";

export type Color = typeof COLOR[number];

export type ColorWithInherit = Color | "inherit";

export type ColorWithTransparent = Color | "transparent";
