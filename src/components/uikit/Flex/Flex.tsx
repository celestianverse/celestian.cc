import React from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Element, Props } from "./Flex.types";
import styles from "./Flex.module.scss";

const DEFAULT_ELEMENT = "div";

export const Flex = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>
({
   as,
   direction,
   align,
   justify,
   wrap,
   gap = "m",
   fullwidth,
   children,
   className,
   ...rest
 }: Polymorphic<E, Props>) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.flex,
        styles[`direction-${direction}`],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        styles[`wrap-${wrap}`],
        styles[`gap-${gap}`],
        className,
        {
          [styles.fullwidth]: fullwidth,
        },
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
