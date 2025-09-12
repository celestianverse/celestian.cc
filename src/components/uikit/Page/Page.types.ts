import React from "react";
import { Align, Justify } from "@/types/Styles";

type Gap = "l" | "m" | "s" | "none";

export type Props = {
  /**
   * <pre>
   *      xl - 128px
   *       l - 96px
   *       m - 64px (default)
   *       s - 48px
   *      xs - 32px
   *    none - 0
   * </pre>
   */
  gap?: Gap;
  align?: Align;
  justify?: Justify;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;