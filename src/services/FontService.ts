"use server";
import { cookies } from "next/headers";
import type { Font } from "@/types/Font";

const FONT_KEY = "font";
const DEFAULT_FONT = "m";

const isFont = (value: unknown): value is Font => {
  return value === "l" || value === "m";
};

export const getCookieFont = async () => {
  const value = (await cookies()).get(FONT_KEY)?.value;

  return isFont(value) ? value : DEFAULT_FONT;
};
