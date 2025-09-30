import { createContext } from "react";
import type { SelectContextValue } from "./SelectContext.types";

export const SelectContext = createContext<SelectContextValue>(
  {} as SelectContextValue
);