import React from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Props, Element } from "./Box.types";
import styles from "./Box.module.scss";

const DEFAULT_ELEMENT = "div";

export const Box = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  variant = "fill",
  color = "neutral",
  padding = "m",
  paddingY,
  paddingX,
  radius = "m",
  className,
  children,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.box,
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        styles[`padding-${padding}`],
        styles[`padding-y-${paddingY}`],
        styles[`padding-x-${paddingX}`],
        styles[`radius-${radius}`],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
