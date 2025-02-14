import React from "react";
import classNames from "classnames";
import { Polymorphic } from "@/types/Polymorphic";
import type { Element, Props } from "./_types/types";
import styles from "./Title.module.scss";

const DEFAULT_ELEMENT = "h3";

export const Title = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  color = "main",
  weight = "bold",
  size = "m",
  isUppercase = false,
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
          [styles.uppercase]: isUppercase,
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
