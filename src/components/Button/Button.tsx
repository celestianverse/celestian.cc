import React from "react";
import classNames from "classnames";
import { Polymorphic } from "@/types/Polymorphic";
import { Props, Element } from "./_types/types";
import styles from "./Button.module.scss";

const DEFAULT_ELEMENT = "button";

export const Button = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  color = "main",
  variant = "fill",
  size = "m",
  isFullWidth,
  isActive,
  isLoading,
  isDisabled,
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
          [styles.full]: isFullWidth,
          [styles.active]: isActive,
          [styles.loading]: isLoading,
          [styles.disabled]: isDisabled,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
