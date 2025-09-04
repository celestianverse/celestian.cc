import React from "react";
import classNames from "classnames";
import { Polymorphic } from "@/types/Polymorphic";
import type { Element, Props } from "./_types/types";
import styles from "./Title.module.scss";

const DEFAULT_ELEMENT = "h3";

export const Title = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  color = "inherit",
  weight = "bold",
  size = "m",
  uppercase = false,
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
        styles.title,
        styles[color],
        styles[size],
        styles[weight],
        {
          [styles.uppercase]: uppercase,
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
