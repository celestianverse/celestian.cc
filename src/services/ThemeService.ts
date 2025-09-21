"use server";
import { cookies } from "next/headers";
import type { Theme } from "@/types/Theme";
import { THEME } from "@/constants/theme";

const THEME_KEY = "theme";
const DEFAULT_THEME = "light";

const isTheme = (value: unknown): value is Theme => {
  return value === THEME.light || value === THEME.dark;
};

export const getCookieTheme = async (): Promise<Theme> => {
  const value = (await cookies()).get(THEME_KEY)?.value;

  return isTheme(value) ? value : DEFAULT_THEME;
};
