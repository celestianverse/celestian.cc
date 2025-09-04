import React from "react";
import classNames from "classnames";
import { Polymorphic } from "@/types/Polymorphic";
import { Props, Element } from "./_types/types";
import styles from "./Button.module.scss";

const DEFAULT_ELEMENT = "button";

export const Button = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  color = "primary",
  variant = "fill",
  size = "m",
  block,
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
        styles[variant],
        styles[color],
        styles[size],
        {
          [styles.block]: block,
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
