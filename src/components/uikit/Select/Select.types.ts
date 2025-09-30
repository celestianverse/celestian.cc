import type { ReactNode } from "react";

export type Props = {
  id?: string;
  value?: string | null;
  placeholder?: string;
  width?: number;
  onChange?: (value: string) => void;
  className?: string;
  children?: ReactNode;
};