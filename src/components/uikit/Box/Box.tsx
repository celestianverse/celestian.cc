import React from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Props, Element } from "./_types/types";
import styles from "./Box.module.scss";

const DEFAULT_ELEMENT = "div";

export const Box = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>(
  {
    as,
    color = "contrast",
    padding = "m",
    radius = "l",
    className,
    children,
    ...rest
  }: Polymorphic<E, Props>,
) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.box,
        styles[color],
        styles[`padding-${padding}`],
        styles[`radius-${radius}`],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
