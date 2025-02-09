import React from "react";
import type { Color } from "@/types/Colors";

type Variant = "fill" | "outline" | "ghost";
type Size = "l" | "m" | "s" | "xs";
type Width = "auto" | "full";
type Element = "Link" | "a" | "div" | "button";

type CustomProps<E extends Element = Element> = {
  as?: E;
  href?: string;
  variant?: Variant;
  color?: Color;
  size?: Size;
  width?: Width;
  isActive?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export type Props = CustomProps & (LinkProps|  AnchorProps | DivProps | ButtonProps);

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "Link"; href: string; };
export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };
export type DivProps = React.HTMLAttributes<HTMLDivElement> & { as: "div" };
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
