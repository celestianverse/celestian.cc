import React from "react";
import classNames from "classnames";
import styles from "./Row.module.scss";
import type { Element, Props } from "./Row.types";
import type { Polymorphic } from "@/types/Polymorphic";

const DEFAULT_ELEMENT = "div";

export const Row = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  gap = "m",
  align = "center",
  justify = "start",
  nowrap,
  full,
  children,
  className,
}: Polymorphic<E, Props>) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.row,
        styles[`gap-${gap}`],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        className,
        {
          [styles.nowrap]: nowrap,
          [styles.full]: full,
        },
      )}
    >
      {children}
    </Component>
  );
};
