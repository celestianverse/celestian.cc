import React from "react";

export type Element = "div" | "section" | "article" | "header" | "footer";

export type Props = {
  className?: string;
  children: React.ReactNode;
};
