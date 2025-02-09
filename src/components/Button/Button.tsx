import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { AnchorProps, ButtonProps, DivProps, LinkProps, Props } from "@/components/Button/_types/types";
import styles from "./Button.module.scss";

export const Button = ({
  as = "button",
  color = "main",
  variant = "fill",
  size = "m",
  width = "auto",
  href,
  isActive,
  isLoading,
  isDisabled,
  className,
  children,
  ...props
}: Props) => {
  const classes= classNames(
    styles.button,
    styles[variant],
    styles[color],
    styles[size],
    styles[width],
    {
      [styles.active]: isActive,
      [styles.loading]: isLoading,
      [styles.disabled]: isDisabled,
    },
    className,
  );

  if (as === "Link" && href) {
    return (
      <Link
        {...props as LinkProps}
        href={href}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a
        {...props as AnchorProps}
        href={href}
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (as === "div") {
    return (
      <div
        {...props as DivProps}
        className={classes}
      >
        {children}
      </div>
    );
  }

  return (
    <button
      {...props as ButtonProps}
      className={classes}
    >
      {children}
    </button>
  );
};
