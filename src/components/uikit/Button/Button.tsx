import React from "react";
import classNames from "classnames";
import { Polymorphic } from "@/types/Polymorphic";
import { Props, Element } from "./Button.types";
import styles from "./Button.module.scss";

const DEFAULT_ELEMENT = "button";

export const Button = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  color = "primary",
  variant = "fill",
  size = "m",
  full,
  active,
  loading,
  disabled,
  className,
  children,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.button,
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        styles[`size-${size}`],
        {
          [styles.full]: full,
          [styles.active]: active,
          [styles.loading]: loading,
          [styles.disabled]: disabled,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
