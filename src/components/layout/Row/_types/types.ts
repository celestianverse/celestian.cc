import React from "react";

export type Element = "div" | "nav" | "ul" | "menu";

type Gap = "l" | "m" | "s" | "xs";

export type Props = {
  /**
   * <pre>
   *    l — 32px;
   *    m — 24px (default);
   *    s — 16px;
   *    xs — 8px;
   * </pre>
   */
  gap?: Gap;
  align?: "start" | "center" | "end";
  isNowrap?: boolean;
  className?: string;
  children: React.ReactNode;
};
