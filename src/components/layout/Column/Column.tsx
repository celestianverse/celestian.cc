import React from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Element, Props } from "./_types/types";
import styles from "./Column.module.scss";

const DEFAULT_ELEMENT = "div";

export const Column = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  gap = "m",
  align,
  children,
  className,
}: Polymorphic<E, Props>) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.column,
        styles[gap],
        styles[`align-${align}`],
        className,
      )}
    >
      {children}
    </Component>
  );
};
