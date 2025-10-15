import type { FieldProps } from "@/components/uikit/Field/Field.types";

export const NAME = "Field";

export const DEFAULT_PROPS: FieldProps = {
  as: "div",
  label: "Field label",
  labelPosition: "top",
  children: "Content..." as any,
} as const;

export const DEFAULT_CHOSEN_PROPS = {...DEFAULT_PROPS, label: "Label"} as const;
