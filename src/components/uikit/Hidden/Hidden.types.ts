import type { ReactNode } from "react";
import type { HIDDEN_ON } from "@/components/uikit/Hidden/Hidden.constants";

export type HiddenOn = typeof HIDDEN_ON[number];

export type HiddenProps = {
  on: HiddenOn;
  children?: ReactNode;
};