import { ICON_SIZE, ICONS } from "./Icon.constants";
import type { ColorWithInherit } from "@/types/Color";

export type IconKeys = keyof typeof ICONS;

export type IconSize = typeof ICON_SIZE[number];

export type IconProps = {
  name: IconKeys;
  color?: ColorWithInherit;
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
