import React from "react";
import classNames from "classnames";
import { Polymorphic } from "@/types/Polymorphic";
import { Props, Element } from "./Tag.types";
import styles from "./Tag.module.scss";

const DEFAULT_ELEMENT = "span";

export const Tag = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>(
  {
    as,
    color = "primary",
    variant = "fill-soft",
    radius = "s",
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
        styles[`radius-${radius}`],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
