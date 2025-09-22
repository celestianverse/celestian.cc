import React from "react";

type On =
  | "all"
  | "desktop-only"
  | "desktop-max"
  | "desktop-min"
  | "laptop-only"
  | "laptop-max"
  | "laptop-min"
  | "tablet-only"
  | "tablet-max"
  | "tablet-min"
  | "mobile-only";

export type Props = {
  on: On;
  children: React.ReactNode;
};