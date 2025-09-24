import React from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Props, Element } from "./Anchor.types";
import styles from "./Anchor.module.scss";

export const DEFAULT_ELEMENT = "a";

export const Anchor = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>(
  {
    as,
    variant = "base",
    color = "primary",
    size = "m",
    padding,
    fullwidth,
    borderStyle,
    borderWidth,
    active,
    disabled,
    className,
    children,
    ...rest
  }: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.anchor,
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        styles[`size-${size}`],
        styles[`padding-${padding}`],
        {
          ["fullwidth"]: fullwidth,
          [styles.active]: active,
          ["disabled"]: disabled,
        },
        className,
      )}
      {...rest}
    >
      <span
        className={classNames(
          styles.content,
          {
            [`border-bottom-style-${borderStyle}`]: borderStyle,
          },
          className,
        )}
        style={{ borderBottomWidth: borderWidth }}
      >
        {children}
      </span>
    </Component>
  );
};
