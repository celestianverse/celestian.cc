import classNames from "classnames";
import type { Props, Element } from "./Divider.types";
import styles from "./Divider.module.scss";
import React from "react";
import type { Polymorphic } from "@/types/Polymorphic";

const DEFAULT_ELEMENT = "div";

export const Divider = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>
({
   as,
   color = "primary",
   tone = "base",
   borderStyle = "solid",
   borderWidth,
   className,
   ...rest
 }: Polymorphic<E, Props>) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.divider,
        styles[`color-${color}`],
        styles[`tone-${tone}`],
        styles[`border-style-${borderStyle}`],
        className,
      )}
      style={{ borderWidth: borderWidth }}
      {...rest}
    />
  );
};
