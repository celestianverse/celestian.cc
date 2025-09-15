import React from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Props, Element } from "./Anchor.types";
import styles from "./Anchor.module.scss";

export const DEFAULT_ELEMENT = "a";

export const Anchor = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  color = "primary",
  size = "m",
  padding,
  fullwidth,
  underline,
  dash,
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
        styles[`color-${color}`],
        styles[`size-${size}`],
        styles[`padding-${padding}`],
        {
          [styles.fullwidth]: fullwidth,
          [styles.underline]: underline,
          [styles.dash]: dash,
          [styles.active]: active,
          [styles.disabled]: disabled,
        },
        className,
      )}
      {...rest}
    >
      <span className={styles.content}>
        {children}
      </span>
    </Component>
  );
};
