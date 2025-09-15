import React from "react";
import classNames from "classnames";
import { Polymorphic } from "@/types/Polymorphic";
import type { Element, Props } from "./Text.types";
import styles from "./Text.module.scss";

const DEFAULT_ELEMENT = "p";

export const Text = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  color = "inherit",
  size = "body",
  weight = "regular",
  lineHeight = "m",
  uppercase = false,
  lowercase = false,
  nowrap = false,
  ellipsis = false,
  className,
  children,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.text,
        styles[`color-${color}`],
        styles[`size-${size}`],
        styles[`weight-${weight}`],
        styles[`line-height-${lineHeight}`],
        {
          [styles.uppercase]: uppercase,
          [styles.lowercase]: lowercase,
          [styles.nowrap]: nowrap,
          [styles.ellipsis]: ellipsis,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
