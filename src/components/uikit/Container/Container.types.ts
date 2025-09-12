import React from "react";

type Gap = "xxl" | "xl" | "l" | "m" | "s" | "xs" | "none";

export type Props = {
  /**
   * <pre>
   *     xxl - 64px
   *      xl - 48px
   *       l - 32px (default)
   *       m - 24px
   *       s - 16px
   *      xs - 8px
   *    none - 0
   * </pre>
   */
  gap?: Gap;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
