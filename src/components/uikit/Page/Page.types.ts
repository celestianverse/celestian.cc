import React from "react";
import type { Align, Justify } from "@/types/Styles";

type Gap = "xl" | "l" | "m" | "s" | "xs" | "none";

export type Props = {
  /**
   * <pre>
   *      xl - 128px
   *       l - 96px
   *       m - 64px
   *       s - 48px
   *      xs - 32px
   *    none - 0 (default)
   * </pre>
   */
  gap?: Gap;
  align?: Align;
  justify?: Justify;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;