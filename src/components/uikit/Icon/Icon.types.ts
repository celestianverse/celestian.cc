import type { ICONS } from "./Icon.constants";
import type { Color } from "@/types/Color";

export type IconKeys = keyof typeof ICONS;

type IconSize = "xxl" | "xl" | "l" | "m" | "s" | "xs";

export type IconProps = {
  name: IconKeys;
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
  size?: IconSize;
  className?: string;
};
