import React from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Element, Props } from "./_types/types";
import styles from "./Row.module.scss";

const DEFAULT_ELEMENT = "div";

export const Row = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  gap = "m",
  align,
  isNowrap,
  children,
  className,
}: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component className={classNames(
      styles.row,
      styles[gap],
      styles[`align-${align}`],
      className,
      {
        [styles.nowrap]: isNowrap,
      },
    )}
    >
      {children}
    </Component>
  );
};
