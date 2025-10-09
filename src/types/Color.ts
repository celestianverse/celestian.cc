import { COLORS } from "@/constants/colors";

export type Color = typeof COLORS[number];

export type ColorWithInherit = Color | "inherit";
