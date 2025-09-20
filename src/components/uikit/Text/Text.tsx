import React from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Element, Props } from "./Text.types";
import styles from "./Text.module.scss";

const DEFAULT_ELEMENT = "p";

export const Text = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>
({
   as,
   color = "inherit",
   size = "m",
   weight = "regular",
   lineHeight = "m",
   uppercase = false,
   lowercase = false,
   ellipsis = false,
   whiteSpace,
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
        styles[`white-space-${whiteSpace}`],
        {
          [styles.uppercase]: uppercase,
          [styles.lowercase]: lowercase,
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
