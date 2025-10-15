import type { ReactElement } from "react";
import { FIELD_ELEMENT, FIELD_POSITION } from "@/components/uikit/Field/Field.constants";

export type FieldElement = typeof FIELD_ELEMENT[number];

export type FieldPosition = typeof FIELD_POSITION[number];

export type FieldProps = {
  as?: FieldElement;
  label?: string | number;
  labelPosition?: FieldPosition;
  labelWidth?: number;
  className?: string;
  children: ReactElement<{ id?: string }>;
};