import React from "react";
import classNames from "classnames";
import type {Polymorphic} from "@/types/Polymorphic";
import type { Props, Element } from "./Column.types";
import styles from "./Column.module.scss";

const DEFAULT_ELEMENT = "div";

export const Column = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  gap = "m",
  align = "start",
  justify = "start",
  full,
  children,
  className,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.column,
        styles[`gap-${gap}`],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        {
          [styles.full]: full,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
