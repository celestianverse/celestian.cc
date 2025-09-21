import type { ICONS } from "./Icon.constants";
import type { Color } from "@/types/Color";

export type Keys = keyof typeof ICONS;

type Size = "xxl" | "xl" | "l" | "m" | "s" | "xs";

export type Props = {
  name: Keys | "none";
  color?: Color;
  /**
   * <pre>
   *     xxl - 64px
   *      xl - 32px
   *       l - 28px
   *       m - 24px
   *       s - 20px
   *      xs - 16px
   * </pre>
   */
  size?: Size;
  className?: string;
};
