import type { Color } from "@/types/Color";
import type { SWITCH_SIZE } from "@/components/uikit/Switch/Switch.constants";

export type SwitchSize = typeof SWITCH_SIZE[number];

export type SwitchProps = {
  id?: string;
  color?: Color;
  size?: SwitchSize;
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
};