import React from "react";
import classNames from "classnames";
import type { Element, Props } from "./_types/types";
import styles from "./Title.module.scss";
import { Polymorphic } from "@/types/Polymorphic";

const DEFAULT_ELEMENT = "h3";

export const Title = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  color = "main",
  weight = "bold",
  size = "m",
  isNowrap = false,
  isEllipsis = false,
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
          [styles.nowrap]: isNowrap,
          [styles.ellipsis]: isEllipsis,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
