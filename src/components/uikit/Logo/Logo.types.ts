import type { Color } from "@/types/Color";

export type Props = {
  color?: Extract<Color, "primary" | "contrast">;
  className?: string;
};